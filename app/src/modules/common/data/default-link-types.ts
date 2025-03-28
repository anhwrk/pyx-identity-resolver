export const defaultLinkTypes = {
  activityIdeas: {
    title: 'Activity Ideas',
    description:
      'A link to ideas for using a product or engaging in other forms of entertainment, particularly with children.',
  },
  allergenInfo: {
    title: 'Allergen information',
    description: 'A link to a description of the allergen information.',
  },
  appDownload: {
    title: 'App download',
    description: 'A link to a related mobile app',
  },
  backgroundInfo: {
    title: 'Background Information',
    description:
      'A link to information typically from the owner of the identified entity about the creative background, thought leadership or influence of the identified entity. This may include the inspiration, innovation for a development process, literary approach or, the science or technology used.',
  },
  brandHomepageClinical: {
    title: 'Information for professionals about this brand',
    description: 'A link to a brand presence aimed at clinical professionals.',
  },
  brandHomepagePatient: {
    title: 'Information for patients about this brand',
    description: 'A link to a brand presence aimed at patients.',
  },
  careersInfo: {
    title: 'Careers information',
    description:
      'A link to information about jobs, careers, or other employment opportunities associated to an organisation or location.',
  },
  certificationInfo: {
    title: 'Certification Information',
    description: 'A link to certification information.',
  },
  consumerHandlingStorageInfo: {
    title: 'Consumer handling and storage information',
    description:
      'A link to information about safe handling and storage for consumer use.',
  },
  defaultLink: {
    title: 'Default link',
    description:
      'The default link for a given identified item to which a resolver will redirect unless there is information in the request that is a better match.',
  },
  defaultLinkMulti: {
    title: 'Default linkMulti',
    description:
      "A set of 'default links' that may be differentiated by information in the HTTP request headers sent to a resolver to enable a better match than the single default link.",
  },
  eifu: {
    title: 'Electronic Instructions For Use',
    description:
      'A link to electronic Instruction For Use instructions for Medical Devices.',
  },
  epcis: {
    title: 'EPC Information Services (EPCIS) repository',
    description: 'A link to an EPCIS repository of visibility event data.',
  },
  epil: {
    title: 'Electronic Patient Information Leaflet',
    description: 'A link to an electronic patient information leaflet.',
  },
  eventsInfo: {
    title: 'Events information',
    description:
      'A link to event details. For a page specifically for scheduling a reservation or booking an appointment, see gs1:scheduleTime.',
  },
  faqs: {
    title: 'Frequently Asked Questions',
    description: 'A link to a set of frequently asked questions.',
  },
  handledBy: {
    title: 'Handled by',
    description:
      'Used when one resolver redirects all request URIs that match a given pattern without further processing, such as from GS1 to a brand-operated service. See section 7.7.1 of the Digital Link standard, version 1.1.',
  },
  hasRetailers: {
    title: 'Has Retailers',
    description: 'A link to a list of retailers.',
  },
  homepage: {
    title: 'Organisation Information Page',
    description:
      "A link to general information about an organisation or brand. Typically the homepage of an organisation's website. It may include links to further information such as certifications, careers, payments, reservations, etc.",
  },
  ingredientsInfo: {
    title: 'Ingredients information',
    description: 'A link to facts about ingredients.',
  },
  instructions: {
    title: 'Instructions',
    description:
      'A link to instructions, such as assembly instructions, usage tips etc. It is not appropriate to use this link type for healthcare regulated content applications for which specific link types are available.',
  },
  jws: {
    title: 'JSON Web Signature',
    description: 'A link to a JSON Web Signature',
  },
  leaveReview: {
    title: 'Leave a review',
    description: 'A link through which a review can be added.',
  },
  locationInfo: {
    title: 'Location information',
    description:
      'A link to a map, directions, or other location-related information. For B2B location information, see gs1:logisticsInfo. For details specific to hours of operation, see gs1:openingHoursInfo',
  },
  logisticsInfo: {
    title: 'Logistics information',
    description:
      'A link to B2B logistics information related to a physical location.',
  },
  loyaltyProgram: {
    title: 'Loyalty program',
    description:
      "A link to information about a loyalty program, including a member's current status and/or a registration option for new members",
  },
  masterData: {
    title: 'Master data',
    description:
      'A link to a source of structured master data for the entity. This is typically for B2B applications.',
  },
  menuInfo: {
    title: 'Menu information',
    description:
      'A link to menu details. This may include food menus, services, or other offerings provided by an organisation or at a location. For details specific to allergens only, see gs1:allergenInfo . For details specific to nutrition information only, see gs1:nutritionalInfo . For details specific to ingredients only, see gs1:ingredientsInfo .',
  },
  nutritionalInfo: {
    title: 'Nutritional Information',
    description: 'A link to nutritional facts.',
  },
  openingHoursInfo: {
    title: 'Opening hours information',
    description: 'A link to details on hours of operation.',
  },
  paymentLink: {
    title: 'Make Payment',
    description:
      'A link to a place where payments details are provided and/or payments can be made by the user.',
  },
  pip: {
    title: 'Product Information Page',
    description:
      'A link to information specifically about the identified item, typically operated by the brand owner or a retailer of the product and aimed at consumers. It may include links to further information, product description, specifications etc.',
  },
  productSustainabilityInfo: {
    title: 'Sustainability and recycling (deprecated)',
    description:
      'This term has been deprecated. Please use gs1:sustainabilityInfo instead.',
  },
  promotion: {
    title: 'Promotion',
    description: 'A link to a promotion.',
  },
  purchaseSuppliesOrAccessories: {
    title: 'Purchase supplies or accessories',
    description:
      'A link to information about where supplies or accessories for the item can be purchased or ordered.',
  },
  quickStartGuide: {
    title: 'Quick start guide',
    description:
      'A link to a description of the key features needed to be understood to begin using the item or interacting with something new.',
  },
  recallStatus: {
    title: 'Recall status',
    description:
      'A link to information about whether the product has been recalled or not, typically an API.',
  },
  recipeInfo: {
    title: 'Recipe website',
    description: 'A link to a recipe website.',
  },
  registerProduct: {
    title: 'Register purchase',
    description:
      'A link to an entry point for registering ownership of a product including for warranty purposes.',
  },
  registryEntry: {
    title: 'Entry in a register',
    description:
      'A link to an entry in a register, such as a business register or register of locations. Such registers may act as alternative identifiers, such as official company numbers, LEIs, other location identifiers etc.',
  },
  relatedImage: {
    title: 'Related image',
    description:
      'A link to any image that depicts or relates to the identified entity (e.g., trade item, assets, business process, patient record, location, organisation, etc.)',
  },
  relatedVideo: {
    title: 'Related video',
    description:
      'A link to any video, or document that has an embedded video, that describes or relates to the identified item, organisation, or location in some way.',
  },
  review: {
    title: 'Reviews',
    description: 'A link to reviews.',
  },
  safetyInfo: {
    title: 'Safety information',
    description: 'A link to safety information.',
  },
  scheduleTime: {
    title: 'Scheduling/Reservation',
    description:
      'A link to a site that offers information on scheduling, appointments, or reservations. This may or may not allow the user to book the reservation.',
  },
  serviceInfo: {
    title: 'Service information',
    description: 'A link to service or maintenance instructions.',
  },
  smartLabel: {
    title: 'SmartLabel',
    description: "A link to the product's SmartLabel page.",
  },
  smpc: {
    title: 'Summary Product Characteristics (SmPC)',
    description:
      'A link to Summary Product Characteristics. To be used specifically when linking to information for healthcare professionals.',
  },
  socialMedia: {
    title: 'Social media',
    description:
      'A link to a social media channel. The title will typically be replaced by the name of the channel.',
  },
  statisticInfo: {
    title: 'Statistics',
    description:
      'A link to information about statistics regarding an organisation, location, or other entity.',
  },
  subscribe: {
    title: 'Subscribe',
    description: 'A link to a subscription form',
  },
  support: {
    title: 'Support',
    description:
      'A link to a source of support such as a helpdesk, chat support, email etc.',
  },
  sustainabilityInfo: {
    title: 'Sustainability and recycling',
    description:
      'A link to information relating to sustainability and recycling requirements or processes.',
  },
  traceability: {
    title: 'Traceability information',
    description:
      'A link to traceability information (includes track and trace). Traceability information may be provided for consumption by humans or computers. If the target is an EPCIS repository, use gs1:epcis instead.',
  },
  tutorial: {
    title: 'Tutorial',
    description:
      'A link to a tutorial or set of tutorials, such as online classes, how-to videos etc.',
  },
  userAgreement: {
    title: 'Sign waiver/agreement/document',
    description: 'A link to an agreement or waiver.',
  },
  verificationService: {
    title: 'Verification Service',
    description:
      'A link to a GS1 Lightweight Messaging Service for verifying the status of a product, organisation, or location and its identifier.',
  },
  whatsInTheBox: {
    title: "What's in the box?",
    description:
      'A link to a description of all the individual items in a packaged item.',
  },
};
