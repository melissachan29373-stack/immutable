export const SITE = {
  name: "immutable.events",
  tagline: "Your Curated Gateway to Web3 Gaming",
  url: "https://immutable.events",
  description:
    "Discover games, quests, and rewards through a curated community starting point for the Immutable ecosystem.",
} as const;

export const CTA_URL =
  "https://play.immutable.com/referral/share/8V7CfR?utm_source=referral";

export const DISCLOSURE =
  "Independent community page. This page contains a referral link.";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
  { label: "FAQ", href: "#faq" },
] as const;

export const VALUE_PROPS = [
  {
    title: "Curated First Step",
    description: "A cleaner starting point designed for newcomers.",
  },
  {
    title: "Faster Discovery",
    description: "Find games, quests, and opportunities without the noise.",
  },
  {
    title: "Community-Driven",
    description: "Built by community members who care about the experience.",
  },
] as const;

export const FEATURES = [
  {
    icon: "Gamepad2" as const,
    title: "Discover Games",
    description:
      "Explore a growing catalog of web3 games built on Immutable. From RPGs to strategy — find your next play.",
  },
  {
    icon: "Compass" as const,
    title: "Join Quests",
    description:
      "Participate in community quests and challenges. Engage with the ecosystem and unlock new experiences.",
  },
  {
    icon: "Gem" as const,
    title: "Explore Opportunities",
    description:
      "Stay informed about events, rewards, and campaigns happening across the Immutable ecosystem.",
  },
  {
    icon: "Zap" as const,
    title: "Start Faster",
    description:
      "Skip the overwhelm. Get a streamlined introduction that helps you navigate the ecosystem right away.",
  },
] as const;

export const STEPS = [
  {
    step: "01",
    title: "Open the Curated Link",
    description:
      "Click the access link to arrive at the official Immutable ecosystem portal through our curated starting point.",
  },
  {
    step: "02",
    title: "Explore the Ecosystem",
    description:
      "Browse available games, quests, and experiences. Discover what interests you at your own pace.",
  },
  {
    step: "03",
    title: "Continue Your Journey",
    description:
      "Dive deeper into the games and opportunities you find. Your web3 adventure starts here.",
  },
] as const;

export const WHY_REASONS = [
  {
    title: "Cleaner Context",
    description:
      "Instead of landing on an unfamiliar page, you arrive with context about what to expect.",
  },
  {
    title: "Better First Impression",
    description:
      "A curated starting point helps newcomers feel oriented and guided from the start.",
  },
  {
    title: "Simpler Entry Point",
    description:
      "No need to search through docs or social feeds. One page, one click, and you're in.",
  },
  {
    title: "Easier to Share",
    description:
      "Share immutable.events with friends who are new to web3 gaming — it's the simplest way to introduce them.",
  },
] as const;

export const SHOWCASE_ITEMS = [
  {
    title: "Game Discovery",
    description: "Browse curated collections of web3 games across genres",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Gamepad2" as const,
  },
  {
    title: "Quest Participation",
    description: "Join community quests and seasonal campaigns",
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Swords" as const,
  },
  {
    title: "Reward Exploration",
    description: "Discover reward pools, events, and ecosystem incentives",
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "Trophy" as const,
  },
  {
    title: "Event Participation",
    description: "Stay updated on launches, tournaments, and milestones",
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "CalendarDays" as const,
  },
] as const;

export const FAQS = [
  {
    question: "What is immutable.events?",
    answer:
      "immutable.events is an independent community page that serves as a curated starting point for exploring the Immutable web3 gaming ecosystem. It is not an official Immutable website.",
  },
  {
    question: "Is this the official Immutable website?",
    answer:
      "No. This is an independent community-created page. It provides a curated entry point with a referral link to the official Immutable platform. We are not affiliated with or endorsed by Immutable.",
  },
  {
    question: "Why use this page first?",
    answer:
      "This page gives newcomers context about what the Immutable ecosystem offers before they arrive. Instead of landing on an unfamiliar platform, you'll understand the value and know what to expect.",
  },
  {
    question: 'What happens after clicking "Start Exploring"?',
    answer:
      "You'll be directed to the official Immutable platform (play.immutable.com) through a referral link. From there, you can explore games, quests, and other experiences directly on the official site.",
  },
  {
    question: "Does this page contain a referral link?",
    answer:
      "Yes. The links on this page are referral links to the Immutable platform. This is disclosed transparently throughout the page. Using the referral link is optional — you can also visit the platform directly.",
  },
] as const;
