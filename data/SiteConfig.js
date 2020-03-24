const config = {
  siteTitle: "Stephen Hathaway – Product Designer", // Site title.
  siteTitleShort: "Stephen Hathaway", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Portfolio of Stephen Hathaway", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Stephen Hathaway's portfolio site.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Stephen Hathaway RSS feed", // Title of the RSS feed
  googleAnalyticsID: "UA-116377490-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 10, // Amount of posts displayed per listing page.
  userName: "Stephen", // Username to display in the author segment.
  userEmail: "hello@stphnhthwy@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "stphnhthwy", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Boulder, Colorado", // User location to display in the author segment.
  copyright: "Copyright © 2020" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
