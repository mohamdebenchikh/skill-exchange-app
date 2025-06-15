import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function BlockedUsers() {
  // Mock data for blocked users
  const blockedUsers = [
    {
      id: 1,
      name: "Sophia",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCps7YhpUKIrjxj5CI4lUo15oLi7AuWbbx5sF3vqZbzDhSNT8HqsPjM0-0xQ-zfeRl21LK1wZFxPC8sK8RlIfscaZQVAtjLj46Xg4wTbL_Hsnb-gPPDYjtBZb7Q3iCzsnzCTUtv0n7IahDr4qKB_z2XueUChZXGT7kmw0yq5t1o9SjxCbQMY9eQUZckN5lQVdr57Nb7vhYglKR2Lmm627-KM7TWsfv3AR6yrRPT-CVzPRVyTi4ACLBvM3URx8SoQ8KlfDwNvEjZsnEj",
    },
    {
      id: 2,
      name: "Ethan",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1npUL5HyjJSF3mbJ3Y4EgsV_L-Iof0DuDLesqz9-e2Al-NS9DmSU5v6RT2zQtgmx3_AbMzXq2XCwzsoXLKoWSKnEud1RTrGwPgiDoMIL9DTDUXMFNT6GhkRJQ-xZl9Nzq-cEyCPN4tR7eZpjd0j1nFiPYrjtGa8ss3n7NnE0BXYxMR4mn0WPnT2-Ypzn5e3jv1q4qKhumX_6H_lGKioNhOtQpmHd6zn4AlouaacEQAaXAOxp513QRr8t1nqFdfcZB8fd4dnAcBlZi",
    },
    {
      id: 3,
      name: "Olivia",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRJkoiV7tMuTwvh6b3J1irk2ylmoC8h-aJqHYFMH5D8Bg4rZmh2QpJFEeUq0GVsXll-d9iB6Uz-PI-DK5ct7iJaUB2vq6RXnnFPfBbfWb9vy2WSYGrJxXBjZdnbzJpEGMwVRnh9eJytMJ_eP_a3doLAsIiu9UpymzcD1DXsySn78YKyB289NXDg2s34kUF_KdfaqZyFJrFkPTBpfQ4BEx2cWEJLNZCRs7nJymx7zU39Yi7XjTcSMmhLoPerK4ZPdHKCbSRGkEKAxFz",
    },
    {
      id: 4,
      name: "Noah",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVLasXRyxzDeqxHuP9sS2MF3KQthIOeDUGfbL1YPfJcuvYzUEctibnFNu8MlSFNyGiszedfcQaF4aaqEWUjRagVtizMtsCPqkkvpI1dGF8Dfo4712yF4jdx7ESv3UTS13Tc7y4KF-f77h4eKIOH3m0wl2Ma1HmE9W99twZW46_6WYbanj_blc41_Q2XSBHLy48s-A8ulXepwWIkYMhNe28pZSInWlOh_idJMdk1HWjiXWnTXqgE6Ft3W7Em3Af_UDATL-wHGDOBtN",
    },
  ];

  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Blocked Users" />
      
      <div className="space-y-1 p-4">
        {blockedUsers.map((user) => (
          <div 
            key={user.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarImage 
                  src={user.imageUrl} 
                  alt={user.name} 
                  className="object-cover"
                />
                <AvatarFallback className="bg-muted">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-foreground text-base font-medium leading-normal line-clamp-1">
                  {user.name}
                </p>
                <p className="text-muted-foreground text-sm font-normal leading-normal line-clamp-2">
                  @{user.name.toLowerCase()}
                </p>
              </div>
            </div>
            
            <Button 
              variant="secondary"
              className="rounded-full h-8 px-4"
            >
              Unblock
            </Button>
          </div>
        ))}
      </div>

    </div>
  );
}