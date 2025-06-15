import { useState } from "react";
import { Search, Plus, Minus, Navigation, List, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AppHeader from "@/components/app-header";

// Fix for Leaflet marker icons in React
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function LocationSearch() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [mapZoom, setMapZoom] = useState(13);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample location data
  const locations = [
    { id: 1, name: "Central Park", position: [40.7812, -73.9665], description: "Popular design studio" },
    { id: 2, name: "Downtown Office", position: [40.7128, -74.0060], description: "Tech hub" },
    { id: 3, name: "Creative Space", position: [40.7357, -74.0025], description: "Art and design workshops" },
  ];

  const toggleMapView = () => setIsMapVisible(!isMapVisible);
  const zoomIn = () => setMapZoom(prev => Math.min(prev + 1, 18));
  const zoomOut = () => setMapZoom(prev => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col flex-1 w-full">
      <AppHeader title="Location" />
      {/* Top Section */}
      <div className="relative">
        {isMapVisible ? (
          <div className="h-[320px] w-full">
            <MapContainer 
              center={[40.7128, -74.0060] as [number, number]} 
              zoom={mapZoom} 
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // @ts-expect-error: 'options' is not in the type but is supported by leaflet
                options={{
                  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }}
              />
              {locations.map(location => (
                <Marker key={location.id} position={location.position as [number, number]}>
                  <Popup>
                    <div className="font-bold">{location.name}</div>
                    <div>{location.description}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        ) : (
          <div 
            className="min-h-[320px] flex flex-col justify-between px-4 pb-4 pt-5"
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5pAvco1GBqAS472KX8W6mu_uQxDCOAzDBDEVibNfzRIyEKWZjK5f9incLv5-I6HieERjYIp8kcSbVRnUEk-eWGMPgtML1bEPh-qV5yKZdwXMnAe0nfJyLA07cL-YmAMMZvxYz6n8pWKAbwe18-vdV-Qj85I0_mNNNXdj31VJjT4UquXW-6SGn8dTJ7KmDJRRoL4aUwmkWvMSDNXUpBdLzryoQUE8_5-il2Z9ewrCs1W9Fi2HyQY7ljCSCNGbNXCH3kEctSPE4CkRj")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative bg-accent rounded-lg">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 ">
                <Search className="h-5 w-5" />
              </div>
              <Input
                placeholder="Search for skills or locations"
                className="pl-10 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col items-end gap-3">
              <div className="flex flex-col gap-0.5">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-t-full bg-background/80 backdrop-blur-sm"
                  onClick={zoomIn}
                >
                  <Plus className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-b-full bg-background/80 backdrop-blur-sm"
                  onClick={zoomOut}
                >
                  <Minus className="h-5 w-5" />
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Navigation className="h-5 w-5 transform scale-x-[-1]" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Main Search Bar */}
      <div className="p-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5" />
          </div>
          <Input
            placeholder="Search for skills or locations"
            className="pl-10 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Button */}
      <div className="px-4">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Filters
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20px" 
                height="20px" 
                fill="currentColor" 
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[85vh]">
            {/* Filter content would go here */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              {/* ... filter options ... */}
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 p-4">
        <Button 
          variant="default" 
          size="icon" 
          onClick={toggleMapView}
          className={!isMapVisible ? "bg-primary" : "bg-muted"}
        >
          <List className="h-5 w-5" />
        </Button>
        <Button 
          variant="default" 
          size="icon" 
          onClick={toggleMapView}
          className={isMapVisible ? "bg-primary" : "bg-muted"}
        >
          <MapPin className="h-5 w-5" />
        </Button>
      </div>

      {/* Bottom spacing */}
      <div className="h-5 bg-background"></div>
    </div>
  );
}