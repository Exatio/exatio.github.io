import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cours MIDO Dauphine",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google',
      tagId: 'V3N0GT64BK'
    },
    locale: "fr-FR",
    baseUrl: "mido.exatio.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Open Sans Condensed",
        body: "Source Sans Pro",
        code: "Hack",
      },
      colors: {
        lightMode: {
          light: "#fffcf9",
          lightgray: "#f4eae2",
          gray: "#e0d4c3",
          darkgray: "#918078",
          dark: "#675c51",
          secondary: "#75b0b4",
          tertiary: "#da8d8d",
          highlight: "#8f9fa926",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#4b4a4a",
          lightgray: "#6d6c6c",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#9dccd0",
          tertiary: "#f1b3b3",
          highlight: "#8f9fa940",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "light-plus",
          dark: "monokai",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
