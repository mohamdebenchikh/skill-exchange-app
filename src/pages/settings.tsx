import AppHeader from "@/components/app-header";
import { Switch } from "@/components/ui/switch";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    skillRequests: true,
    requestAcceptance: true,
    newSkills: true,
    profileVisibility: true,
    skillsVisibility: true,
    contactPermissions: true
  });

  const handleToggle = (setting: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Settings" />
      
      {/* Notification Preferences */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <p className="font-medium">Skill Request Notifications</p>
              <p className="text-muted-foreground text-sm mt-1">
                Get notified when someone requests to learn a skill from you.
              </p>
            </div>
            <Switch 
              checked={notifications.skillRequests}
              onCheckedChange={() => handleToggle("skillRequests")}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <p className="font-medium">Request Acceptance Notifications</p>
              <p className="text-muted-foreground text-sm mt-1">
                Receive alerts when someone accepts your skill-sharing request.
              </p>
            </div>
            <Switch 
              checked={notifications.requestAcceptance}
              onCheckedChange={() => handleToggle("requestAcceptance")}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <p className="font-medium">New Skill Sharing Notifications</p>
              <p className="text-muted-foreground text-sm mt-1">
                Be informed when someone shares a new skill you might be interested in.
              </p>
            </div>
            <Switch 
              checked={notifications.newSkills}
              onCheckedChange={() => handleToggle("newSkills")}
            />
          </div>
        </div>
      </div>
      
      {/* Privacy Settings */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <p className="font-medium">Profile Visibility</p>
              <p className="text-muted-foreground text-sm mt-1">
                Control who can see your profile details.
              </p>
            </div>
            <Switch 
              checked={notifications.profileVisibility}
              onCheckedChange={() => handleToggle("profileVisibility")}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <p className="font-medium">Skills List Visibility</p>
              <p className="text-muted-foreground text-sm mt-1">
                Manage the visibility of your skills list.
              </p>
            </div>
            <Switch 
              checked={notifications.skillsVisibility}
              onCheckedChange={() => handleToggle("skillsVisibility")}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <p className="font-medium">Direct Contact Permissions</p>
              <p className="text-muted-foreground text-sm mt-1">
                Control who can contact you directly.
              </p>
            </div>
            <Switch 
              checked={notifications.contactPermissions}
              onCheckedChange={() => handleToggle("contactPermissions")}
            />
          </div>
        </div>
      </div>
      
      {/* Language */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold mb-4">Language</h2>
        
        <div className="flex items-center justify-between p-4 bg-card rounded-lg">
          <p className="font-medium">Select Language</p>
          <div className="flex items-center">
            <span className="text-muted-foreground mr-2">English</span>
            <ChevronRight className="text-muted-foreground" size={20} />
          </div>
        </div>
      </div>
      
      {/* Account */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <p className="font-medium">Change Password</p>
            <ChevronRight className="text-muted-foreground" size={20} />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <p className="font-medium text-destructive">Delete Account</p>
            <ChevronRight className="text-muted-foreground" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}