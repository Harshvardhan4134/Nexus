import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

/**
 * When SITE_URL (or PUBLIC_URL) is set and client/public/opengraph.* exists,
 * rewrites og:image and twitter:image to absolute URLs for social previews.
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: "vite-plugin-meta-images",
    transformIndexHtml(html) {
      const baseUrl = getSiteUrl();
      if (!baseUrl) {
        return html;
      }

      const publicDir = path.resolve(process.cwd(), "client", "public");
      const opengraphPngPath = path.join(publicDir, "opengraph.png");
      const opengraphJpgPath = path.join(publicDir, "opengraph.jpg");
      const opengraphJpegPath = path.join(publicDir, "opengraph.jpeg");

      let imageExt: string | null = null;
      if (fs.existsSync(opengraphPngPath)) {
        imageExt = "png";
      } else if (fs.existsSync(opengraphJpgPath)) {
        imageExt = "jpg";
      } else if (fs.existsSync(opengraphJpegPath)) {
        imageExt = "jpeg";
      }

      if (!imageExt) {
        return html;
      }

      const imageUrl = `${baseUrl.replace(/\/$/, "")}/opengraph.${imageExt}`;

      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`,
      );

      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`,
      );

      return html;
    },
  };
}

function getSiteUrl(): string | null {
  const raw =
    process.env.SITE_URL?.trim() ||
    process.env.PUBLIC_URL?.trim() ||
    "";
  if (!raw) {
    return null;
  }
  return raw.replace(/\/$/, "");
}
