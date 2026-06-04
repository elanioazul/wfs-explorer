// Translation keys for the application
export type TranslationKey =
  | "appTitle"
  | "appSubtitle"
  | "wfsUrlLabel"
  | "wfsUrlPlaceholder"
  | "wfsUrlPlaceholderSearch"
  | "analyzeButton"
  | "discoveringLayers"
  | "wfsDescription"
  | "errorTitle"
  | "enterWfsUrl"
  | "noLayersFound"
  | "corsIssueDetected"
  | "corsDescription"
  | "corsOption1"
  | "corsOption2"
  | "corsOption3"
  | "availableLayers"
  | "layers"
  | "layersDescription"
  | "currentLayer"
  | "layerInfoDescription"
  | "layer"
  | "layerName"
  | "layerDescription"
  | "changeLayer"
  | "displayProjection"
  | "sourceProjection"
  | "availableProjections"
  | "loadFullMetadata"
  | "loadingMetadata"
  | "additionalMetadata"
  | "keywords"
  | "contact"
  | "fees"
  | "accessConstraints"
  | "metadataUrl"
  | "viewFullMetadata"
  | "maxFeatures"
  | "totalFeatures"
  | "counting"
  | "unknown"
  | "countNotSupported"
  | "downloadData"
  | "downloadDescription"
  | "downloading"
  | "downloadGeoJSON"
  | "downloadCSV"
  | "downloadFilteredData"
  | "downloadFilteredDescription"
  | "downloadFilteredGeoJSON"
  | "downloadCompleteDataText"
  | "loadingLayerData"
  | "wfsSummary"
  | "wfsSummaryDescription"
  | "featuresLoaded"
  | "filteredFrom"
  | "ofTotal"
  | "attributes"
  | "geometryType"
  | "usingWGS84"
  | "mapPreview"
  | "mapPreviewDescription"
  | "loadingMap"
  | "attributeFilters"
  | "activeFilters"
  | "activeFilter"
  | "clearAll"
  | "clear"
  | "filterCondition"
  | "attribute"
  | "operator"
  | "value"
  | "minValue"
  | "maxValue"
  | "selectAttribute"
  | "selectOperator"
  | "selectValue"
  | "addFilter"
  | "clear"
  | "applyFilters"
  | "attributeExplorer"
  | "attributeStatistics"
  | "noDataAvailable"
  | "id"
  | "noResults"
  | "showing"
  | "entries"
  | "filteredFromTotal"
  | "dataType"
  | "count"
  | "uniqueValues"
  | "min"
  | "max"
  | "average"
  | "minLength"
  | "maxLength"
  | "avgLength"
  | "topValues"
  | "showMore"
  | "showLess"
  | "valueDistribution"
  | "true"
  | "false"
  | "missingValues"
  | "exampleDatasets"
  | "exampleDatasetsDescription"
  | "ausprobieren"
  | "cantabriaEnergy"
  | "cantabriaEnergyDesc"
  | "spainAgroRegion"
  | "spainAgroRegionDesc"
  | "madridTransport"
  | "madridTransportDesc"
  | "cataloniaAdminDivision"
  | "cataloniaAdminDivisionDesc"
  | "filter"
  | "features"
  | "of"
  | "language"
  | "english"
  | "spanish"
  | "total"
  | "projectionError"
  | "projectionErrorDesc"
  | "projectionWarning"
  | "nativeProjection"
  | "nativeProjectionOnly"
  | "mapNotAvailable"
  | "useNativeProjection"
  | "downloadAllFeatures"
  // Add these new translation keys to the TranslationKey type
  | "loadingPerformanceWarning"
  | "allFeatures"
  | "downloadAllNote"
  // New translation keys
  | "clearSelection"
  | "viewOnMap"
  | "noGeometry"
  | "attributeStatisticsTitle"
  | "selectAttributeFirst"
  | "filterByAttribute"
  | "apply"
  | "coordinates"
  | "lat"
  | "lng"
  | "featureProperties"
  | "bounds"
  | "checkConsole"
  | "statisticsFor"
  | "featuresOf"
  | "empty"
  | "statCard"
  | "topValuesTitle"
  | "valueDistributionTitle"
  | "trueValue"
  | "falseValue"
  | "missingValuesTitle"
  | "availableLayersTitle"
  | "availableLayersDescription"
  | "customValue"
  | "features500"
  | "features1000"
  | "features5000"
  | "features10000"
  | "custom"
  | "wgs84"
  | "map"
  | "loaded"
  | "share"
  | "shareWfs"
  | "copied"
  | "minimumValue"
  | "maximumValue"
  | "averageValue"
  | "minimumLength"
  | "maximumLength"
  | "averageLength"
  | "mostFrequent"
  // New download section translations
  | "downloadOptions"
  | "dataFormats"
  | "completeData"
  | "filteredData"
  | "availableFormats"
  | "includeAllFeatures"
  | "currentFilters"
  | "noFiltersApplied"
  // New UI translations
  | "exploreAndAnalyze"
  | "wfsData"
  | "toolDescription1"
  | "toolDescription2"
  | "wfsDataInfo"
  | "keyFeatures"
  | "mapVisualization"
  | "statistics"
  | "statisticsTitle"
  | "filtering"
  | "wgs84Conversion"
  | "dataDownload"
  | "metadataInfo"
  | "interactiveMetadataInfo"
  | "interactiveMetadataInfoDescription"
  | "interactiveMapVisualization"
  | "interactiveMapDescription"
  | "attributeStatisticsDescription"
  | "advancedFiltering"
  | "advancedFilteringDescription"
  | "projectionConversion"
  | "projectionConversionDescription"
  | "formatConversion"
  | "formatConversionDescription"
  | "dataDownloadDescription"
  | "hideExampleDatasets"
  | "showExampleDatasets"
  | "jsonFormatNotSupported"
  | "jsonFormatNotSupportedDesc"
  | "mapPreviewUnavailable"
  | "dataDownloadUnavailable"
  | "attributeStatisticsUnavailable"
  | "limitedFunctionality"
  | "showLessDetails"
  | "showMoreDetails"
  | "loading"
  | "updatingFeatures"
  | "loadingTimeWarning"
  | "filterOptions"
  | "filterDescription"
  | "dataExplorer"
  | "dataExplorerDescription"
  | "invalidWfsUrl"
  | "wfsServiceNotFound"
  | "authenticationRequired"
  | "networkError"
  | "serverError"
  | "troubleshootingSuggestions"
  | "checkUrlTypos"
  | "verifyValidWfs"
  | "checkServerOnline"
  | "tryAddingWfs"
  | "tryExampleDatasets"
  | "unknownError"
  | "fetchDataError"
  | "maxFeaturesUpdateError"
  | "downloadFullDataset"
  | "projectionFormat"
  | "totalAvailable"
  | "filteredFeatureCount"
  | "projectionNote"
  | "applyFiltersFirst"
  | "filters"
  | "matchYourFilters"
  | "projectBy"
  | "conductedBy"
  | "inCollaborationWith"
  | "fundedBy"
  | "privacyPolicy"
  | "feedback"
  | "github"
  | "contact"
  | "imprint"
  | "previous"
  | "next"
  | "onlyWMSavailable"
  | "noMatchSearch"
  | "loadingDatasets"
  | "noWFSAvailable"
  // Bbox filter translations
  | "bboxFilter"
  | "bboxActive"
  | "clearBbox"
  | "boundingBox"
  | "selectBbox"
  | "selectBboxDescription"
  | "bboxDrawInstructions"
  | "selectedBbox"
  | "applyBbox"
  | "cancel"
  | "edit"
  | "SW"
  | "NE";

// English translations
export const enTranslations: Record<TranslationKey, string> = {
  appTitle: "WFS Explorer",
  appSubtitle: "Web Feature Service Data Analysis Tool",
  wfsUrlLabel: "WFS URL",
  wfsUrlPlaceholder: "Enter WFS URL",
  wfsUrlPlaceholderSearch: "Search or Enter WFS URL",
  noMatchSearch: "No datasets match your search.",
  analyzeButton: "Load",
  discoveringLayers: "Discovering Layers...",
  wfsDescription: "Enter a valid WFS URL to analyze its layers and data",
  errorTitle: "Error",
  enterWfsUrl: "Please enter a WFS URL",
  noLayersFound: "No layers found in the WFS service",
  corsIssueDetected: "CORS Issue Detected",
  corsDescription:
    "This error may be caused by Cross-Origin Resource Sharing (CORS) restrictions. The WFS server may not allow requests from your browser. Try:",
  corsOption1: "Using a WFS service that supports CORS",
  corsOption2: "Using a proxy server to bypass CORS restrictions",
  corsOption3: "Running this application on the same domain as the WFS service",
  availableLayers: "Available Layers",
  layers: "layers",
  layersDescription:
    "This WFS service contains multiple layers. Please select one to analyze.",
  currentLayer: "About the Data",
  layerInfoDescription: "Metadata from the loaded WFS layer",
  layer: "Layer:",
  layerName: "Name",
  layerDescription: "Description",
  changeLayer: "Change Layer",
  displayProjection: "Display Projection",
  sourceProjection: "Native Projection",
  availableProjections: "Available Projections:",
  loadFullMetadata: "Show more Metadata",
  loadingMetadata: "Loading Metadata...",
  additionalMetadata: "Additional Metadata",
  keywords: "Keywords",
  contact: "Contact",
  fees: "Fees",
  accessConstraints: "Access Constraints",
  metadataUrl: "Metadata URL:",
  viewFullMetadata: "View Full Metadata",
  maxFeatures: "Maximum Features to Load",
  totalFeatures: "Total Features Available",
  counting: "Counting...",
  unknown: "Unknown",
  countNotSupported: "Count not supported",
  downloadData: "Download Data",
  downloadDescription: "Download the WFS data as GeoJSON",
  downloading: "Downloading...",
  downloadGeoJSON: "Download GeoJSON",
  downloadCSV: "Download CSV",
  downloadFilteredData: "Download Filtered Data",
  downloadFilteredDescription: "Download the filtered WFS data as GeoJSON",
  downloadFilteredGeoJSON: "Download Filtered GeoJSON",
  downloadCompleteDataText: "Download complete dataset",
  loadingLayerData: "Loading layer data...",
  wfsSummary: "WFS Summary",
  wfsSummaryDescription: "Overview of the analyzed WFS data",
  featuresLoaded: "Features Loaded",
  filteredFrom: "filtered from",
  ofTotal: "of",
  attributes: "Attributes",
  geometryType: "Geometry Type",
  usingWGS84: "Using WGS84 (EPSG:4326) projection",
  mapPreview: "Map Preview",
  mapPreviewDescription: "Spatial visualization of the WFS data",
  loadingMap: "Loading map...",
  attributeFilters: "Attribute Filters",
  activeFilters: "Active Filters:",
  activeFilter: "Active Filters:",
  clearAll: "Clear All",
  clear: "Clear",
  filterCondition: "Filter Condition",
  attribute: "Attribute",
  operator: "Operator",
  value: "Value",
  minValue: "Min Value",
  maxValue: "Max Value",
  selectAttribute: "Select attribute",
  selectOperator: "Select operator",
  selectValue: "Select value",
  addFilter: "Add Attribute Filter",
  applyFilters: "Apply Filters",
  attributeExplorer: "Table",
  attributeStatistics: "Attribute Statistics",
  noDataAvailable: "No data available",
  id: "ID",
  noResults: "No results found",
  showing: "Showing",
  entries: "entries",
  filteredFromTotal: "filtered from",
  dataType: "Data Type",
  count: "Count",
  uniqueValues: "Unique Values",
  min: "Min",
  max: "Max",
  average: "Average",
  minLength: "Min Length",
  maxLength: "Max Length",
  avgLength: "Avg Length",
  topValues: "Top Values",
  showMore: "show more",
  showLess: "show less",
  valueDistribution: "Value Distribution",
  true: "True",
  false: "False",
  missingValues: "Missing Values",
  exampleDatasets: "Example services",
  exampleDatasetsDescription: "Find more WFS services from Ciberdefense BU using the ",
  ausprobieren: ".",
  cantabriaEnergy: "Cantabria Energy",
  cantabriaEnergyDesc: "IDE Cantabria Energy layers.",
  spainAgroRegion: "Agricultural regions of Spain",
  spainAgroRegionDesc: "Agricultural regions and statistical areas in Spain",
  madridTransport: "Madrid Transport",
  madridTransportDesc: "Road and rail networks with their corresponding infrastructure",
  cataloniaAdminDivisionDesc:
    "Catalonia admin divisions, municipalities, districts...",
  cataloniaAdminDivision: "Catalonia admin divisions",
  filter: "Filter",
  features: "features",
  of: "of",
  language: "Language",
  english: "English",
  spanish: "Spanish",
  total: "total",

  // Projection related translations
  projectionError: "Projection Error",
  projectionErrorDesc:
    "Map preview is not available. Use the download option with native projection instead.",
  projectionWarning: "Projection Warning",
  nativeProjection: "Native projection",
  nativeProjectionOnly:
    "Native projection only - WGS84 conversion not available",
  mapNotAvailable:
    "Map preview not available due to unsupported projection system",
  useNativeProjection: "Use native projection instead",
  downloadAllFeatures: "Download all features",

  // Add these translations to the enTranslations object
  loadingPerformanceWarning:
    "Loading many features may slow down your browser performance",
  allFeatures: "All Features",
  downloadAllNote:
    "You can download all features using the download options below, regardless of how many are loaded for viewing",

  // New translations
  clearSelection: "Clear Selection",
  viewOnMap: "View on map",
  noGeometry: "No geometry available",
  attributeStatisticsTitle: "Attribute Statistics",
  selectAttributeFirst: "Select attribute first",
  filterByAttribute: "Filter by attribute",
  apply: "Apply",
  coordinates: "Coordinates",
  lat: "Lat",
  lng: "Lng",
  featureProperties: "Feature Properties",
  bounds: "Bounds",
  checkConsole: "Check the console for more details",
  statisticsFor: "Summary for",
  featuresOf: "features of",
  empty: "(empty)",
  statCard: "Statistics Card",
  topValuesTitle: "Top Values",
  valueDistributionTitle: "Value Distribution",
  trueValue: "True",
  falseValue: "False",
  missingValuesTitle: "Missing Values",
  availableLayersTitle: "Available Layers",
  availableLayersDescription:
    "This WFS service contains layers. Please select one to analyze.",
  customValue: "Custom...",
  features500: "500 features",
  features1000: "1,000 features",
  features5000: "5,000 features",
  features10000: "10,000 features",
  custom: "Custom",
  wgs84: "WGS84 (EPSG:4326)",
  map: "Map",
  loaded: "Loaded",
  share: "Share",
  shareWfs: "Share this Dataset",
  copied: "Copied!",
  minimumValue: "Minimum Value",
  maximumValue: "Maximum Value",
  averageValue: "Average Value",
  minimumLength: "Minimum Length",
  maximumLength: "Maximum Length",
  averageLength: "Average Length",
  mostFrequent: "Most Frequent Values",

  // New download section translations
  downloadOptions: "Download Options",
  dataFormats: "Download dataset in GeoJSON format",
  completeData: "Complete Data",
  filteredData: "Filtered Data",
  availableFormats: "Available in multiple formats",
  includeAllFeatures: "Include all features",
  currentFilters: "Export with current filters applied",
  noFiltersApplied: "No filters currently applied",

  // New UI translations
  exploreAndAnalyze: "Explore and Analyze",
  wfsData: "WFS Data",
  wfsDataInfo:
    "A WFS (Web Feature Service) is an online service that makes it possible to retrieve geographical data via the Internet.",
  toolDescription1: "Visualize, analyze and export",
  toolDescription2:
    "directly in the browser. Insert a WFS URL or select a sample data set.",
  keyFeatures: "Key Features",
  metadataInfo: "View Metadata",
  interactiveMetadataInfo: "Explore Metadata",
  interactiveMetadataInfoDescription: "Data description and other information",
  mapVisualization: "Map Preview",
  statistics: "Summary",
  statisticsTitle: "Explore Attributes",
  filtering: "Filtering",
  wgs84Conversion: "WGS84 Conversion",
  dataDownload: "Download",
  interactiveMapVisualization: "Interactive Map Preview",
  interactiveMapDescription:
    "View WFS data spatially with interactive features",
  attributeStatisticsDescription: "Analyze data patterns and distributions",
  advancedFiltering: "Advanced Filtering",
  advancedFilteringDescription:
    "Filter data by attribute values and conditions",
  projectionConversion: "Projection Conversion",
  projectionConversionDescription:
    "Automatic conversion to WGS84 for visualization",
  formatConversion: "Format Conversion",
  formatConversionDescription:
    "GML to GeoJSON conversion for better compatibility",
  dataDownloadDescription:
    "Download datasets as GeoJSON in the WGS84 (EPSG:4326) projection or as CSV (attributes only).",
  hideExampleDatasets: "Hide example datasets",
  showExampleDatasets: "Show example datasets",
  jsonFormatNotSupported: "JSON Format Not Supported",
  jsonFormatNotSupportedDesc:
    "This WFS service does not support JSON as an output format. The following features are not available:",
  mapPreviewUnavailable: "Map preview",
  dataDownloadUnavailable: "Data download",
  attributeStatisticsUnavailable: "Attribute statistics",
  limitedFunctionality:
    "You can still explore the attribute data, but spatial visualization and advanced features are limited.",
  showLessDetails: "Show Less Details",
  showMoreDetails: "Show More Details",
  loading: "Loading...",
  updatingFeatures: "Updating with {count} features...",
  loadingTimeWarning: "This may take a moment depending on the data size",
  filterOptions: "Filter Options",
  filterDescription: "Filter data by attribute values",
  dataExplorer: "Data Explorer",
  dataExplorerDescription: "Explore attribute data from the WFS",
  invalidWfsUrl: "Invalid WFS URL (400 Bad Request)",
  wfsServiceNotFound: "WFS Service Not Found (404)",
  authenticationRequired: "Authentication Required",
  networkError: "Network Error",
  serverError: "Server Error",
  troubleshootingSuggestions: "Troubleshooting suggestions:",
  checkUrlTypos: "Check for typos in the URL",
  verifyValidWfs: "Verify that the URL points to a valid WFS service",
  checkServerOnline: "Make sure the server is online and accessible",
  tryAddingWfs: 'Try adding "/wfs" to the end of the URL if it\'s missing',
  tryExampleDatasets: "Try one of our example datasets instead",
  unknownError: "Failed to fetch WFS capabilities due to an unknown error",
  fetchDataError: "Failed to fetch WFS data",
  maxFeaturesUpdateError: "Failed to update data with new max features setting",
  downloadFullDataset: "Download the complete dataset in GeoJSON format",
  projectionFormat: "Coordinate System",
  totalAvailable: "Total available",
  filteredFeatureCount: "{count} feature(s) match your filters",
  projectionNote: "Filtered data is exported in the WGS84 projection",
  applyFiltersFirst: "Apply filters to enable filtered data download",
  filters: "filters",
  matchYourFilters: "match your filters",
  // Footer translations
  projectBy: "A project of",
  conductedBy: "Conducted by",
  inCollaborationWith: "In collaboration with",
  fundedBy: "Funded by",
  privacyPolicy: "Privacy Policy",
  feedback: "Feedback",
  github: "GitHub",
  imprint: "Imprint",
  previous: "Previous",
  next: "Next",
  onlyWMSavailable: "only available as WMS: ",
  loadingDatasets: "loading external Datasets",
  noWFSAvailable: "no WFS available",
  // Bbox filter translations
  bboxFilter: "Add Area Filter",
  bboxActive: "Area filter active",
  clearBbox: "Remove area filter",
  boundingBox: "Bounding Box",
  selectBbox: "Select Area Filter",
  selectBboxDescription:
    "Draw a rectangle on the map to filter features by geographic area. Only features within the selected area will be loaded.",
  bboxDrawInstructions:
    "Click and drag on the map to draw a rectangle. The filter will be applied to all WFS queries.",
  selectedBbox: "Selected area",
  applyBbox: "Apply Area Filter",
  cancel: "Cancel",
  edit: "Edit",
  SW: "SW",
  NE: "NE"
};

// Spanish translations
export const spTranslations: Record<TranslationKey, string> = {
  appTitle: "WFS Explorer",
  appSubtitle: "Herramienta de Análisis de Datos de Servicios de Features Web",
  wfsUrlLabel: "URL del WFS",
  wfsUrlPlaceholder: "Introduce la URL del WFS",
  wfsUrlPlaceholderSearch: "Busca o introduce la URL del WFS",
  noMatchSearch: "Ningún conjunto de datos coincide con tu búsqueda.",
  analyzeButton: "Cargar",
  discoveringLayers: "Descubriendo capas...",
  wfsDescription: "Introduce una URL de WFS válida para analizar sus capas y datos",
  errorTitle: "Error",
  enterWfsUrl: "Por favor, introduce una URL de WFS",
  noLayersFound: "No se encontraron capas en el servicio WFS",
  corsIssueDetected: "Problema de CORS detectado",
  corsDescription:
    "Este error puede deberse a restricciones de CORS. El servidor WFS puede no permitir solicitudes desde tu navegador. Prueba:",
  corsOption1: "Usar un servicio WFS que admita CORS",
  corsOption2: "Usar un servidor proxy para evitar las restricciones CORS",
  corsOption3: "Ejecutar esta aplicación en el mismo dominio que el servicio WFS",
  availableLayers: "Capas disponibles",
  layers: "capas",
  layersDescription:
    "Este servicio WFS contiene varias capas. Selecciona una para analizar.",
  currentLayer: "Acerca de los Datos",
  layerInfoDescription: "Metadatos de la capa WFS cargada",
  layer: "Capa:",
  layerName: "Nombre",
  layerDescription: "Descripción",
  changeLayer: "Cambiar capa",
  displayProjection: "Proyección de visualización",
  sourceProjection: "Proyección nativa",
  availableProjections: "Proyecciones disponibles:",
  loadFullMetadata: "Mostrar más metadatos",
  loadingMetadata: "Cargando metadatos...",
  additionalMetadata: "Metadatos adicionales",
  keywords: "Palabras clave",
  contact: "Contacto",
  fees: "Tarifas",
  accessConstraints: "Restricciones de acceso",
  metadataUrl: "URL de metadatos:",
  viewFullMetadata: "Ver metadatos completos",
  maxFeatures: "Máximo de features a cargar",
  totalFeatures: "Total de features disponibles",
  counting: "Contando...",
  unknown: "Desconocido",
  countNotSupported: "Conteo no admitido",
  downloadData: "Descargar datos",
  downloadDescription: "Descargar los datos WFS como GeoJSON",
  downloading: "Descargando...",
  downloadGeoJSON: "Descargar GeoJSON",
  downloadCSV: "Descargar CSV",
  downloadFilteredData: "Descargar datos filtrados",
  downloadFilteredDescription: "Descargar los datos WFS filtrados como GeoJSON",
  downloadFilteredGeoJSON: "Descargar GeoJSON filtrado",
  downloadCompleteDataText: "Descargar conjunto de datos completo",
  loadingLayerData: "Cargando datos de la capa...",
  wfsSummary: "Resumen WFS",
  wfsSummaryDescription: "Resumen de los datos WFS analizados",
  featuresLoaded: "Features cargados",
  filteredFrom: "filtrados de",
  ofTotal: "de",
  attributes: "Atributos",
  geometryType: "Tipo de geometría",
  usingWGS84: "Usando proyección WGS84 (EPSG:4326)",
  mapPreview: "Vista previa del mapa",
  mapPreviewDescription: "Visualización espacial de los datos WFS",
  loadingMap: "Cargando mapa...",
  attributeFilters: "Filtros de atributos",
  activeFilters: "Filtros activos:",
  activeFilter: "Filtro activo:",
  clearAll: "Limpiar todo",
  clear: "Limpiar",
  filterCondition: "Condición de filtro",
  attribute: "Atributo",
  operator: "Operador",
  value: "Valor",
  minValue: "Valor mínimo",
  maxValue: "Valor máximo",
  selectAttribute: "Seleccionar atributo",
  selectOperator: "Seleccionar operador",
  selectValue: "Seleccionar valor",
  addFilter: "Añadir filtro de atributo",
  applyFilters: "Aplicar filtros",
  attributeExplorer: "Tabla",
  attributeStatistics: "Estadísticas de atributos",
  noDataAvailable: "No hay datos disponibles",
  id: "ID",
  noResults: "No se encontraron resultados",
  showing: "Mostrando",
  entries: "registros",
  filteredFromTotal: "filtrados de",
  dataType: "Tipo de dato",
  count: "Cantidad",
  uniqueValues: "Valores únicos",
  min: "Mín",
  max: "Máx",
  average: "Promedio",
  minLength: "Longitud mín",
  maxLength: "Longitud máx",
  avgLength: "Longitud prom",
  topValues: "Valores principales",
  showMore: "mostrar más",
  showLess: "mostrar menos",
  valueDistribution: "Distribución de valores",
  true: "Verdadero",
  false: "Falso",
  missingValues: "Valores faltantes",
  exampleDatasets: "Servicios de ejemplo",
  exampleDatasetsDescription: "Encuentra más servicios WFS de la BU Ciberdefensa con el ",
  ausprobieren: ".",
  cantabriaEnergy: "Cantabría energia.",
  cantabriaEnergyDesc: "Capas de energía de la IDE Cantabría.",
  spainAgroRegion: "Comarcas agrarias de España",
  spainAgroRegionDesc: "Comarcas agrarias y áreas estadísticas en España",
  madridTransport: "Transporte de Madrid",
  madridTransportDesc: "Redes de carreteras y ferrocarril con sus Correspondientes infraestructuras",
  cataloniaAdminDivisionDesc:
    "División administratica de la CCAA de Cataluña",
  cataloniaAdminDivision: "Division administrativa de Cataluña",
  filter: "Filtro",
  features: "features",
  of: "de",
  language: "Idioma",
  english: "Inglés",
  spanish: "Español",
  total: "total",

  // Projection related translations
  projectionError: "Error de proyección",
  projectionErrorDesc:
    "La vista previa del mapa no está disponible. Usa la opción de descarga con la proyección nativa.",
  projectionWarning: "Advertencia de proyección",
  nativeProjection: "Proyección nativa",
  nativeProjectionOnly:
    "Solo proyección nativa: conversión a WGS84 no disponible",
  mapNotAvailable:
    "Vista previa del mapa no disponible debido a un sistema de proyección no compatible",
  useNativeProjection: "Usar proyección nativa",
  downloadAllFeatures: "Descargar todos los features",

  // Add these translations to the spTranslations object
  loadingPerformanceWarning:
    "Cargar muchos features puede ralentizar el rendimiento del navegador",
  allFeatures: "Todos los features",
  downloadAllNote:
    "Puedes descargar todos los features usando las opciones de descarga a continuación, independientemente de cuántos estén cargados para visualización",

  // New translations
  clearSelection: "Limpiar selección",
  viewOnMap: "Ver en el mapa",
  noGeometry: "No hay geometría disponible",
  attributeStatisticsTitle: "Estadísticas de atributos",
  selectAttributeFirst: "Selecciona primero un atributo",
  filterByAttribute: "Filtrar por atributo",
  apply: "Aplicar",
  coordinates: "Coordenadas",
  lat: "Lat",
  lng: "Lon",
  featureProperties: "Propiedades del feature",
  bounds: "Extensión",
  checkConsole: "Revisa la consola para más detalles",
  statisticsFor: "Resumen para",
  featuresOf: "features de",
  empty: "(vacío)",
  statCard: "Tarjeta de estadísticas",
  topValuesTitle: "Valores principales",
  valueDistributionTitle: "Distribución de valores",
  trueValue: "Verdadero",
  falseValue: "Falso",
  missingValuesTitle: "Valores faltantes",
  availableLayersTitle: "Capas disponibles",
  availableLayersDescription:
    "Este servicio WFS contiene capas. Selecciona una para analizar.",
  customValue: "Personalizado...",
  features500: "500 features",
  features1000: "1.000 features",
  features5000: "5.000 features",
  features10000: "10.000 features",
  custom: "Personalizado",
  wgs84: "WGS84 (EPSG:4326)",
  map: "Mapa",
  loaded: "Cargado",
  share: "Compartir",
  shareWfs: "Compartir este conjunto de datos",
  copied: "¡Copiado!",
  minimumValue: "Valor mínimo",
  maximumValue: "Valor máximo",
  averageValue: "Valor promedio",
  minimumLength: "Longitud mínima",
  maximumLength: "Longitud máxima",
  averageLength: "Longitud promedio",
  mostFrequent: "Valores más frecuentes",

  // New download section translations
  downloadOptions: "Opciones de descarga",
  dataFormats: "Descargar conjunto de datos en formato GeoJSON",
  completeData: "Datos completos",
  filteredData: "Datos filtrados",
  availableFormats: "Disponible en múltiples formatos",
  includeAllFeatures: "Incluir todos los features",
  currentFilters: "Exportar con los filtros actuales aplicados",
  noFiltersApplied: "No hay filtros aplicados actualmente",

  // New UI translations
  exploreAndAnalyze: "Explorar y Analizar",
  wfsData: "Datos WFS",
  wfsDataInfo:
    "Un WFS (Web Feature Service) es un servicio en línea que permite recuperar datos geográficos a través de Internet.",
  toolDescription1: "Visualiza, analiza y exporta ",
  toolDescription2:
    "directamente en el navegador. Introduce una URL de WFS o selecciona un conjunto de datos de ejemplo.",
  keyFeatures: "Funcionalidades principales",
  metadataInfo: "Ver metadatos",
  interactiveMetadataInfo: "Explorar metadatos",
  interactiveMetadataInfoDescription: "Descripción de datos y otra información",
  mapVisualization: "Vista previa del mapa",
  statistics: "Resumen",
  statisticsTitle: "Explorar atributos",
  filtering: "Filtrado",
  wgs84Conversion: "Conversión a WGS84",
  dataDownload: "Descargar",
  interactiveMapVisualization: "Vista previa interactiva del mapa",
  interactiveMapDescription:
    "Visualiza datos WFS espacialmente con funciones interactivas",
  attributeStatisticsDescription: "Analiza patrones y distribuciones de datos",
  advancedFiltering: "Filtrado avanzado",
  advancedFilteringDescription:
    "Filtra datos por valores y condiciones de atributos",
  projectionConversion: "Conversión de proyección",
  projectionConversionDescription:
    "Conversión automática a WGS84 para visualización",
  formatConversion: "Conversión de formato",
  formatConversionDescription:
    "Conversión de GML a GeoJSON para mejor compatibilidad",
  dataDownloadDescription:
    "Descarga conjuntos de datos como GeoJSON en la proyección WGS84 (EPSG:4326) o como CSV (solo atributos).",
  hideExampleDatasets: "Ocultar conjuntos de datos de ejemplo",
  showExampleDatasets: "Mostrar conjuntos de datos de ejemplo",
  jsonFormatNotSupported: "Formato JSON no compatible",
  jsonFormatNotSupportedDesc:
    "Este servicio WFS no admite JSON como formato de salida. Las siguientes funcionalidades no están disponibles:",
  mapPreviewUnavailable: "Vista previa del mapa",
  dataDownloadUnavailable: "Descarga de datos",
  attributeStatisticsUnavailable: "Estadísticas de atributos",
  limitedFunctionality:
    "Aún puedes explorar los datos de atributos, pero la visualización espacial y las funciones avanzadas están limitadas.",
  showLessDetails: "Mostrar menos detalles",
  showMoreDetails: "Mostrar más detalles",
  loading: "Cargando...",
  updatingFeatures: "Actualizando con {count} features...",
  loadingTimeWarning: "Esto puede tomar un momento dependiendo del tamaño de los datos",
  filterOptions: "Opciones de filtro",
  filterDescription: "Filtrar datos por valores de atributos",
  dataExplorer: "Explorador de datos",
  dataExplorerDescription: "Explorar datos de atributos del WFS",
  invalidWfsUrl: "URL de WFS no válida (400 Bad Request)",
  wfsServiceNotFound: "Servicio WFS no encontrado (404)",
  authenticationRequired: "Autenticación requerida",
  networkError: "Error de red",
  serverError: "Error del servidor",
  troubleshootingSuggestions: "Sugerencias para solucionar problemas:",
  checkUrlTypos: "Verifica que no haya errores tipográficos en la URL",
  verifyValidWfs: "Verifica que la URL apunte a un servicio WFS válido",
  checkServerOnline: "Asegúrate de que el servidor esté en línea y accesible",
  tryAddingWfs: 'Intenta agregar "/wfs" al final de la URL si falta',
  tryExampleDatasets: "Prueba uno de nuestros conjuntos de datos de ejemplo",
  unknownError:
    "Error al obtener las capacidades del WFS debido a un error desconocido",
  fetchDataError: "Error al obtener los datos WFS",
  maxFeaturesUpdateError:
    "Error al actualizar los datos con la nueva configuración de máximos features",
  downloadFullDataset:
    "Descargar el conjunto de datos completo en formato GeoJSON",
  projectionFormat: "Sistema de coordenadas",
  totalAvailable: "Total disponible",
  filteredFeatureCount: "{count} feature(s) coinciden con tus filtros",
  projectionNote: "Los datos filtrados se exportan en la proyección WGS84",
  applyFiltersFirst: "Aplica filtros para habilitar la descarga de datos filtrados",
  filters: "filtros",
  matchYourFilters: "coinciden con tus filtros",
  // Footer translations
  projectBy: "Un proyecto de",
  conductedBy: "Realizado por",
  inCollaborationWith: "En colaboración con",
  fundedBy: "Financiado por",
  privacyPolicy: "Política de privacidad",
  feedback: "Comentarios",
  github: "GitHub",
  imprint: "Aviso legal",
  previous: "Anterior",
  next: "Siguiente",
  onlyWMSavailable: "solo disponible como WMS: ",
  loadingDatasets: "cargando datasets externos",
  noWFSAvailable: "no hay WFS disponible",
  // Bbox filter translations
  bboxFilter: "Añadir filtro de área",
  bboxActive: "Filtro de área activo",
  clearBbox: "Eliminar filtro de área",
  boundingBox: "Caja delimitadora",
  selectBbox: "Seleccionar filtro de área",
  selectBboxDescription:
    "Dibuja un rectángulo en el mapa para filtrar features por área geográfica. Solo se cargarán los features dentro del área seleccionada.",
  bboxDrawInstructions:
    "Haz clic y arrastra en el mapa para dibujar un rectángulo. El filtro se aplicará a todas las consultas WFS.",
  selectedBbox: "Área seleccionada",
  applyBbox: "Aplicar filtro de área",
  cancel: "Cancelar",
  edit: "Editar",
  SW: "SO",
  NE: "NE"
};
