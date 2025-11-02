import { FacebookIcon } from "@/components/ui/icons/icon-facebook"
import { InstagramIcon } from "@/components/ui/icons/icon-instagram"
import { PinterestIcon } from "@/components/ui/icons/icon-pinterest"
import { TwitterIcon } from "@/components/ui/icons/icon-twitter"
import { YoutubeIcon } from "@/components/ui/icons/icon-youtube"

export const NAVLINKS = [
  {
    NAME: "HOME",
    CONTENT: "Home",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: false,
  },
  {
    NAME: "PRICING",
    CONTENT: "Pricing",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: true,
  },
  {
    NAME: "PRODUCT",
    CONTENT: "Product",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: true,
  },
  {
    NAME: "ABOUT_ US",
    CONTENT: "About us",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: true,
  },
  {
    NAME: "CAREERS",
    CONTENT: "Careers",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: true,
  },
  {
    NAME: "COMMUNITY",
    CONTENT: "Community",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: true,
  },
  {
    NAME: "PRIVACY_POLICY",
    CONTENT: "Privacy Policy",
    CLASSNAME: "",
    INFOOTER: true,
    INHEADER: false,
  }
]

export const SOCIALS = [
  {
    NAME: "Facebook",
    ICON: <FacebookIcon />
  },
  {
    NAME: "Youtube",
    ICON: <YoutubeIcon />
  },
  {
    NAME: "Twitter",
    ICON: <TwitterIcon />
  },
  {
    NAME: "Pinterest",
    ICON: <PinterestIcon />
  },
  {
    NAME: "Instagram",
    ICON: <InstagramIcon />
  },
]

export const MAIN = {
  HERO: {
    TAGLINE: "Bring everyone together to build better products.",
    SUBTITLE: "Manage makes it simple for software teams to plan day - to - day tasks while keeping the larger team goals in view."
  },
  FEATURES: {
    TAGLINE: "What’s different about Manage?",
    SUBTITLE: "Manage provides all the functionality your team needs, without the complexity.Our software is tailor - made for modern digital product teams.",
    CARDS: [
      {
        STEP: "01",
        TITLE: "Track company-wide progress",
        CONTENT: "See how your day - to - day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again."
      },
      {
        STEP: "02",
        TITLE: "Advanced built-in reports",
        CONTENT: "Set internal delivery estimates and track progress toward company goals.Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
      },
      {
        STEP: "03",
        TITLE: "Everything you need in one place",
        CONTENT: "Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all -in -one team productivity solution."
      },
    ]
  },
  TESTIMONIALS: {
    TAGLINE: "What they’ve said",
    CARDS: [
      {
        NAME: "Anisha Li",
        CONTENT: "“Manage has supercharged our team’s workflow.The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
        AVATAR: "/avatar-anisha.png",
        CLASSNAME: ""
      },
      {
        NAME: "Ali Bravo",
        CONTENT: "“We have been able to cancel so many other subscriptions since using Manage.There is no more cross - channel confusion and everyone is much more focused.”",
        AVATAR: "/avatar-ali.png",
        CLASSNAME: ""
      },
      {
        NAME: "Richard Watts",
        CONTENT: "“Manage allows us to provide structure and process.It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”",
        AVATAR: "/avatar-richard.png",
        CLASSNAME: ""
      },
      {
        NAME: "Shanai Gough",
        CONTENT: "“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in -sync without being intrusive.”",
        AVATAR: "/avatar-shanai.png",
        CLASSNAME: ""
      },
    ]
  },
  MARKETING: {
    TAGLINE: "Simplify how your team works today.",
  }
}
