export interface BusinessDetail {
  title: string;
  subtitle: string;
  heroImage: string;
  history: string;
  capabilities: string;
  scale: string;
  geographicalPresence: string;
  futureOutlook: string;
  sustainabilityCommitment: string;
}

export const businessData: Record<string, BusinessDetail> = {
  mining: {
    title: "Sustainable Mining & Natural Resources",
    subtitle: "Over Six Decades of Responsible Resource Stewardship",
    heroImage: "/images/photos/mining-open-pit.jpg",
    history: "Mining has been the foundational cornerstone of Jyoti Infrastructure's journey since the 1960s, beginning with open-cast extraction in the mineral-rich Keonjhar district of Western Odisha.",
    capabilities: "Precision open-cast extraction, high-efficiency heavy material handling, continuous dust suppression mist cannons, bio-fencing, and progressive topsoil conservation.",
    scale: "Annual extraction capacity exceeding 4 million metric tonnes of high-grade iron ore and manganese.",
    geographicalPresence: "Western Odisha mining belt, India.",
    sustainabilityCommitment: "Enforcing zero-effluent discharge, dedicated ecological green-belt reforestation, computerized ambient air quality monitoring, and community healthcare infrastructure in surrounding tribal villages.",
    futureOutlook: "Deploying electrified haulage machinery, solarized processing plants, and advanced digital geology tools to pioneer carbon-neutral mineral extraction."
  },
  automobile: {
    title: "Automobile Retail & Clean Mobility",
    subtitle: "Driving Odisha's Transition to Next-Gen Electric & Hybrid Mobility",
    heroImage: "/images/photos/ev-charging.jpg",
    history: "Inaugurated in 1996 as a TVS dealership, Jyote Motors has grown into Odisha's most trusted multi-brand automotive powerhouse spanning passenger, commercial, and luxury segments.",
    capabilities: "3S (Sales, Service, Spares) network, certified high-voltage EV service technicians, fast-charging hubs, and customer mobility finance.",
    scale: "Exclusive dealership presence representing global leaders: Maruti Suzuki, Audi, Harley-Davidson, TVS Motors, and Suzuki.",
    geographicalPresence: "Bhubaneswar, Cuttack, and major commercial hubs across Odisha.",
    sustainabilityCommitment: "Rapidly installing solar-powered EV fast-charging stations across our dealership network and promoting hybrid and battery-electric vehicles to displace urban vehicular emissions.",
    futureOutlook: "Expanding state-wide EV fast-charging corridors, eco-friendly green workshop certifications, and smart digital mobility platforms."
  },
  "financial-services": {
    title: "Financial Services & Inclusion",
    subtitle: "Expanding Access to Affordable & Dignified Green Housing Credit",
    heroImage: "/images/photos/financial-advisory.jpg",
    history: "Strategic investment in Saral Home Finance Limited to democratize homeownership and provide accessible credit to underserved socio-economic segments.",
    capabilities: "Small-ticket housing loans, digital credit appraisal, streamlined doorstep processing, and flexible repayment terms for informal-income earners.",
    scale: "Regulated by the National Housing Bank (NHB), servicing thousands of families with a high-quality loan portfolio.",
    geographicalPresence: "Odisha and adjacent semi-urban and rural markets.",
    sustainabilityCommitment: "Promoting green home micro-loans for rooftop solar installations, rainwater harvesting structures, and energy-efficient building materials for lower-middle-income borrowers.",
    futureOutlook: "Broadening digital micro-mortgage reach across underserved Tier-2, Tier-3, and rural clusters to foster financial resilience."
  },
  "real-estate": {
    title: "Commercial Real Estate & Infrastructure",
    subtitle: "Building Enduring, Energy-Efficient Tangible Assets",
    heroImage: "/images/photos/city-towers.jpg",
    history: "Strategic development and long-term asset management of premium commercial properties across prime metropolitan and regional growth corridors.",
    capabilities: "Grade-A commercial construction, energy-efficient building envelopes, modern facility management, and high-yield tangible asset creation.",
    scale: "Diverse commercial portfolio spanning Delhi NCR, Pondicherry, and Bhubaneswar.",
    geographicalPresence: "Delhi NCR, Pondicherry, Bhubaneswar.",
    sustainabilityCommitment: "Designing all new commercial developments to meet IGBC/LEED green building standards with solar rooftops, energy-efficient HVAC, and rainwater harvesting cisterns.",
    futureOutlook: "Expanding premium sustainable commercial business parks and mixed-use commercial destinations tailored to modern corporate tenants."
  },
  "renewable-energy": {
    title: "Renewable Clean Energy",
    subtitle: "75 MW Solar and Wind Portfolio Powering India's Decarbonization",
    heroImage: "/images/photos/solar-farm-aerial.jpg",
    history: "Ventured decisively into the green energy sector in 2017 through a landmark 25-year Power Purchase Agreement (PPA) with the Solar Energy Corporation of India (SECI).",
    capabilities: "Utility-scale ground-mounted solar plant engineering, high-uptime wind turbine generation, and smart grid synchronization.",
    scale: "10 MW Greenfield Solar Power Project at Patnagarh, Bolangir, alongside a 65 MW Wind Energy Portfolio, offsetting 120,000+ metric tonnes of CO₂ annually.",
    geographicalPresence: "Patnagarh (Bolangir District, Odisha) and key windy corridors across India.",
    sustainabilityCommitment: "100% clean, zero-emission electricity generation displacing fossil fuel reliance while generating green jobs in rural Bolangir.",
    futureOutlook: "Targeting aggressive expansion of utility solar capacity, battery energy storage systems (BESS), and green hydrogen pilot studies."
  },
  aviation: {
    title: "Executive Aviation & Connectivity",
    subtitle: "Connecting Strategic Hubs Through High-Reliability Private Aviation",
    heroImage: "/images/photos/private-jet-sunset.jpg",
    history: "Strategic entry into executive aviation to overcome regional connectivity gaps and empower industrial leaders with flexible, time-critical travel.",
    capabilities: "Aircraft acquisition, charter fleet management, executive VIP flight operations, and round-the-clock DGCA compliance.",
    scale: "Growing fleet of private aircraft serving corporate, industrial, and high-priority travel requirements across India.",
    geographicalPresence: "Pan-India flight operations with key transit bases in Bhubaneswar and Delhi.",
    sustainabilityCommitment: "Optimizing flight trajectories to reduce jet fuel burn, enforcing strict avionics maintenance for fuel efficiency, and exploring Sustainable Aviation Fuel (SAF) partnerships.",
    futureOutlook: "Upgrading fleet with fuel-efficient next-generation turboprops and light jets to enhance inter-city industrial connectivity."
  },
  hospitality: {
    title: "Luxury Sustainable Hospitality",
    subtitle: "Taj Puri Resort & Spa: Coastal Elegance on the Bay of Bengal",
    heroImage: "/images/photos/resort-pool.jpg",
    history: "Developed under Pravat Hospitality Private Limited, commencing commercial operations on 24 December 2024 with the iconic Taj brand.",
    capabilities: "Ultra-luxury beachfront resort ownership, operated in partnership with Indian Hotels Company Limited (IHCL, a Tata Enterprise).",
    scale: "90-key luxury oceanfront resort featuring bespoke suites, wellness spa, signature coastal dining, and premier banquet lawns.",
    geographicalPresence: "Plot No: 545/1546, Sipasarubali, Puri, Odisha – 752001.",
    sustainabilityCommitment: "Eco-sensitive coastal construction, 100% wastewater recycling via advanced on-site STP, elimination of single-use plastics, and sourcing local Odia handcrafted textiles and produce.",
    futureOutlook: "Expanding our luxury and heritage hospitality portfolio across Eastern India's most celebrated cultural and coastal destinations."
  }
};
