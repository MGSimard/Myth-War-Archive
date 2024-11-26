import type { Metadata } from "next";
import { Figure } from "@/components/Figure";

export const metadata: Metadata = {
  title: "Myth War Archive - Regions",
  description: "Myth War Archive | Core region directory making up the world of Myth War.",
};

export default function Page() {
  return (
    <>
      <h2>Regions</h2>

      <hr className="divider" />

      <h3 id="sky-passage">Sky Passage</h3>
      <div className="grid-maps">
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NcPnn5kpm4P0hJ2ERyDWqe9dvOoN5SbMzHniA"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NHC8ult3Hz8daoBx7sqZNvfWYUMDPwghmGn4S"
          caption="Map of Sky Passage"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NIwF2QmsvXPJ3CktFqy9AHai6V2jzSrf7h5L8"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NdLha40zJHT9ox4VtUMZX7Bazbr538mg2SCwl"
          caption="Map of Sky Passage"
          version="Myth War II"
        />
      </div>

      <hr className="divider" />

      <h3 id="woodlingor">Woodlingor</h3>
      <div className="grid-maps">
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1N9Sn9K0eLJKf8YNVx0pdBSilFb2grkye1hR5Z"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NmqXzLjAk5xRFvbrqCBOKpekyTMwX3f6I1nji"
          caption="Map of Woodlingor"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NHOAuqo3Hz8daoBx7sqZNvfWYUMDPwghmGn4S"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NdGG50LQzJHT9ox4VtUMZX7Bazbr538mg2SCw"
          caption="Map of Woodlingor (Winter)"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NHVTd543Hz8daoBx7sqZNvfWYUMDPwghmGn4S"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NGCVeEHtVMSeU9APjy0dhz15CJim4gnBvalTI"
          caption="Map of Woodlingor"
          version="Myth War II"
        />
      </div>

      <hr className="divider" />

      <h3 id="blython">Blython</h3>
      <div className="grid-maps">
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NkLtWrDPqMBg5XUDSJtsO7HKZNbFp8vYiaczu"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NUpLQ5efBhVC1bNduT6OStolse3kI7QiMEPKm"
          caption="Map of Blython"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NzkhwoMRFQiEB3JMNWaAZtubXjgTY9rePlV28"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NvA133vKwjQM0IfTDPJYum2ihyFXEaCKqn7xN"
          caption="Map of Blython (Winter)"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NYDMPDgIU41I3SWdTpuwmvQcPXi8Aj7fFz90t"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1NZWFZzzVEouXyx6NQm9hBrdOTZW50cUYw3ePa"
          caption="Map of Blython"
          version="Myth War II"
        />
      </div>

      <hr className="divider" />

      <h3 id="desert-city">Desert City</h3>
      <div className="grid-maps">
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NgliGLY7xGMfIyqoH5R2PXCVwv1SWmBx3tnlF"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1Nu8jQTcS8PE9ZMU6W7IBOcw1N5Szpjygbr0Xi"
          caption="Map of Desert City"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NWIi1cxbWAFCPxQiv7YOXs6Tug2VtZyIdnwH1"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1N2IqK8yCCIxXwNcF1QZpJgVWKvo9ERUGAetrk"
          caption="Map of Desert City"
          version="Myth War II"
        />
      </div>

      <hr className="divider" />

      <h3 id="demon-square">Demon Square</h3>
      <div className="grid-maps">
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1NUw8Px6fBhVC1bNduT6OStolse3kI7QiMEPKm"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1N8EwrCx9oewsIDHVUhQKjSNmG0tLCflBW61FO"
          caption="Map of Demon Square"
          version="Myth War Online"
        />
        <Figure
          src="https://utfs.io/f/e0BHXYWYpV1Ne1MHvWYpV1NBWkFjoUeicuC7vEbRTlytzdh0"
          fullSrc="https://utfs.io/f/e0BHXYWYpV1N6WzN2uh4ymgjrv7sFtEowNVO9hGUdulx3R2W"
          caption="Map of Demon Square"
          version="Myth War II"
        />
      </div>
    </>
  );
}
