# WFS-Explorer

One of the most important sources for (open) geospatial data is the Web Feature Service (WFS). WFS provides geographic features—such as points, lines, or polygons — along with associated attribute data in a standardized way over the internet. It enables precise, up-to-date, and machine-readable information to be retrieved.

Despite its technical capabilities, WFS is often underutilized. The reason: without specialized knowledge or appropriate software—such as Geographic Information Systems (GIS)—many potential users find it difficult to access and process the data for their own needs.

This is where the WFS Explorer comes in. The tool acts as a clear and user-friendly web interface that allows even non-experts to explore and filter WFS data according to their needs. It builds a bridge between the complexity of geospatial services and practical applications by people with varying levels of experience. The tool is also available in German.

### Geospatial Data at a Glance

With the WFS Explorer, users can interactively explore individual WFS datasets. This can be done either by entering any WFS URL manually or by selecting a sample dataset provided by the Geoportal Berlin.

### Features

- Metadata Display: Access to additional information such as dataset descriptions, contact information, projection details, and licensing terms.

- Map Preview: An interactive map view offers a quick overview of the spatial extent and geometry structure of the dataset.

- Attribute Filtering: A user-friendly filter allows datasets to be narrowed down based on specific attribute values.

- Bounding Box Filtering: An interactive map interface allows users to draw a bounding box to filter features by geographic area. This is useful for focusing on a specific region of interest within a larger dataset.

- Tabular Attribute View: A clean tabular overview of all attributes and an automatic summary of their contents help users explore and analyze the data—making it easy to understand what information is contained in the dataset.

- GeoJSON Export: The dataset can be exported as a GeoJSON file using the widely supported WGS 84 projection (EPSG:4326), enabling seamless integration into other applications.

- CSV Export: The dataset can be exported as a CSV file without the geometries. This can be helpful if you are only interested in the data attributes.

- Direct URL Access: The WFS Explorer supports loading datasets via URL parameters. When a specific WFS URL is passed to the tool, the corresponding dataset is automatically loaded—ideal for embedding into other websites or workflows.

## URL Parameters

The WFS Explorer can be preconfigured via URL parameters. This makes it easy to open a specific dataset directly, apply predefined filters, or provide a list of datasets for search and selection. When a WFS dataset is loaded and filters are applied in the interface, the corresponding URL parameters are set automatically.

### About Web Feature Service (WFS)

The WFS Explorer is built on the Web Feature Service (WFS) standard, defined by the Open Geospatial Consortium (OGC). WFS provides geospatial data in a structured, machine-readable format—including both geometry (e.g., points, lines, polygons) and corresponding attribute data. What makes this format particularly powerful is its standardized API: regardless of the data provider, WFS endpoints follow a consistent protocol and can thus be queried in a uniform way.

The WFS Explorer leverages this interface, using key operations such as GetCapabilities, DescribeFeatureType, and GetFeature to automatically retrieve structured information from WFS services. This includes available layers, data structures (attribute names and types), and the actual geospatial data. Important metadata such as projection info, licensing terms, or contact details can also be extracted systematically.

## Prerequisites

- Node.js
- npm

### Local installation

1. Clone the repository:

   ```bash
   git clone https://wherever.git
   cd odis-wfsexplorer
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Docker installation

- Build the image and run it:

  1. docker build -t wfs-explorer .

  2. docker run --name wfs-explorer -p 3000:3000 wfs-explorer

  3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

- Docker compose file:

  1. docker compose up -d
  2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Content Licensing

Texts and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).

## Credits

<table>
  <tr>
      <td>
      Made by: <a href="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin.svg" />
      </a>
    </td>
    <td>
       Together with: <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senatskanzelei-de.svg" />
      </a>
    </td>
  </tr>
</table>
