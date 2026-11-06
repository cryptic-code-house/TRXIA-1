export interface NavLink {
  label: string;
  href: string;
}

export interface Founder {
  name: string;
  role: string;
  title: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
  };
  navigation: {
    links: NavLink[];
    actionButton: {
      text: string;
      href: string;
    };
  };
  hero: {
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    subline: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
  problem: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    headlineSuffix: string;
    points: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  solution: {
    badge: string;
    headline: string;
    cards: {
      id: 'crowd' | 'isolation';
      title: string;
      subtitle: string;
      description: string;
      highlight: string;
    }[];
  };
  howItWorks: {
    badge: string;
    headline: string;
    crowdSteps: {
      step: number;
      title: string;
      device: string;
      description: string;
      metric: string;
    }[];
    isolationSteps: {
      step: number;
      title: string;
      device: string;
      description: string;
      metric: string;
    }[];
  };
  simulation: {
    badge: string;
    headline: string;
    tagline: string;
  };
  privacy: {
    badge: string;
    headline: string;
    claims: {
      title: string;
      description: string;
    }[];
  };
  founders: {
    badge: string;
    headline: string;
    members: Founder[];
    video: {
      youtubeUrl: string;
      embedUrl: string;
      title: string;
      captionsLabel: string;
    };
  };
  closure: {
    tagline: string;
    contactEmail: string;
    instagramUrl: string;
    copyright: string;
  };
}

export const content: SiteContent = {
  brand: {
    name: "TRXIA",
    tagline: "When the battery fades, the alert doesn't.",
  },
  navigation: {
    links: [
      { label: "Problem", href: "#problem" },
      { label: "Solution", href: "#solution" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Simulation", href: "#simulation" },
      { label: "Privacy", href: "#privacy" },
      { label: "Founders", href: "#founders" },
    ],
    actionButton: {
      text: "Launch Simulation",
      href: "#simulation",
    },
  },
  hero: {
    headlineStart: "When the battery fades, ",
    headlineHighlight: "the alert doesn’t.",
    headlineEnd: "",
    subline: "Small signal. Big reach. Almost no battery.",
    primaryButton: {
      text: "See How It Works",
      href: "#how-it-works",
    },
    secondaryButton: {
      text: "Explore Simulation",
      href: "#simulation",
    },
  },
  problem: {
    badge: "THE VULNERABILITY",
    headline: "Sharing your location isn't the problem. ",
    headlineHighlight: "The chain",
    headlineSuffix: " breaks.",
    points: [
      {
        id: "chain-break",
        title: "The Broken Relay",
        description: "Location sharing exists. But when your phone is dying, the chain that carries it to your loved ones breaks.",
      },
      {
        id: "energy-burn",
        title: "Excessive Power Drain",
        description: "Standard tracking exhausts battery rapidly on the very power reserve you cannot spare.",
      },
      {
        id: "zero-network",
        title: "Dead Zone Paralysis",
        description: "Without cellular signal, traditional solutions stop functioning entirely.",
      },
    ],
  },
  solution: {
    badge: "THE DUAL ARCHITECTURE",
    headline: "Engineered to transmit when everything else fails.",
    cards: [
      {
        id: "crowd",
        title: "Crowd-Sourced Relay",
        subtitle: "Active BLE Mesh in populated zones",
        description: "Nearby phones relay the alert over low-energy BLE. Engages automatically at critical battery levels, consuming drastically less energy than continuous GPS.",
        highlight: "Drastically reduced power consumption compared to GPS.",
      },
      {
        id: "isolation",
        title: "Cell ID Isolation Protocol",
        subtitle: "Autonomous fallback in dead zones",
        description: "When isolated, the phone reads local cell-tower telemetry without GPS drain, queuing minimal packets for server sync or autonomous SMS dispatch.",
        highlight: "Minimal low-bandwidth transmission packet.",
      },
    ],
  },
  howItWorks: {
    badge: "WORKFLOW",
    headline: "How TRXIA preserves the lifeline.",
    crowdSteps: [
      {
        step: 1,
        title: "Low-Power BLE Broadcast",
        device: "Phone A",
        description: "Activates strictly at ≤20% battery, using vastly less power than continuous GPS.",
        metric: "≤20% Battery Threshold",
      },
      {
        step: 2,
        title: "Peer Packet Ingestion",
        device: "Phone B",
        description: "Passing phone silently captures the encrypted BLE beacon in the background.",
        metric: "Zero Interruption",
      },
      {
        step: 3,
        title: "Offloaded GPS Fix",
        device: "Phone B",
        description: "Listener device uses its own healthy battery to acquire precise coordinates.",
        metric: "Saves Phone A Battery",
      },
      {
        step: 4,
        title: "Database Relay",
        device: "Cloud Server",
        description: "Secure database routes authenticated distress tracking to designated contacts.",
        metric: "Immediate Dispatch",
      },
    ],
    isolationSteps: [
      {
        step: 1,
        title: "Cell Tower Identification",
        device: "Isolated Phone",
        description: "Reads local Cell ID directly from hardware with near-zero power draw.",
        metric: "Zero GPS Drain",
      },
      {
        step: 2,
        title: "Ephemeral Caching",
        device: "Isolated Phone",
        description: "Captures momentary GPS fix and encapsulates minimal telemetry payload.",
        metric: "Minimal Packet",
      },
      {
        step: 3,
        title: "Server Sync",
        device: "Phone ➔ Server",
        description: "Transmits packet to server as soon as cellular data reconnects.",
        metric: "Auto Reconnect",
      },
      {
        step: 4,
        title: "Autonomous SMS Fallback",
        device: "Emergency Network",
        description: "If data network stays offline, executes emergency SOS with Cell ID via SMS.",
        metric: "Zero-Data SMS Lifeline",
      },
    ],
  },
  simulation: {
    badge: "LIVE SIMULATION",
    headline: "Simulate the protocol in real time.",
    tagline: "Safety shouldn’t depend on a full charge.",
  },
  privacy: {
    badge: "PRIVACY ASSURANCE",
    headline: "Safety without surveillance.",
    claims: [
      {
        title: "DPDP Act 2023 Data Fiduciary",
        description: "TRXIA operates strictly as a registered Data Fiduciary under the Digital Personal Data Protection Act 2023.",
      },
      {
        title: "Purpose-Limited Collection",
        description: "Collects only essential telemetry strictly required to deliver emergency alerts.",
      },
      {
        title: "Post-Incident Deletion",
        description: "Telemetry data is deleted after use once the emergency cycle concludes.",
      },
      {
        title: "Zero Peer Visibility",
        description: "No one can see another person's data. Relaying phones never access identity or coordinates.",
      },
    ],
  },
  founders: {
    badge: "LEADERSHIP",
    headline: "Meet the Founders.",
    members: [
      {
        name: "Swaraj Gope",
        role: "System Designer",
        title: "Founder",
      },
      {
        name: "Shivraj Shelake",
        role: "Product Manager",
        title: "Co-Founder",
      },
    ],
    video: {
      youtubeUrl: "https://youtu.be/FBHrs_wJA8Y?si=jxyDkck8NsSOrFM9",
      embedUrl: "https://www.youtube.com/embed/FBHrs_wJA8Y?autoplay=1&rel=0&modestbranding=1",
      title: "Founders' Vision & System Design",
      captionsLabel: "Founder's Intro",
    },
  },
  closure: {
    tagline: "The chain holds, even when the battery doesn’t.",
    contactEmail: "trxia.co@gmail.com",
    instagramUrl: "https://www.instagram.com/trxia.co?mdxt=b2k5ZTk4MHVkaHc=",
    copyright: "© 2026 TRXIA",
  },
};
