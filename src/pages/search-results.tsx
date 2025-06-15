import { ChevronDown, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AppHeader from "@/components/app-header";
import FilterDrawer from "@/components/filter-drawer";

export default function SearchResults() {
    const listings = [
        {
            title: "Photography Basics",
            author: "Sophia Bennett",
            price: "$25",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9c1d2WUiUoxOTAQwbMRGaPwsuMsJoxICmZnUuXKzVcUn1S5eJnY_NqsM-0oy9a11HC5V9SJDFEz8NjSiPC633fV5bE1-5ZzfuWZgv5swRWAPUFmumzHFjlkUQbOIJIDXaq3EFu0JVfSyZE0JMvcFsntVmaMKTEvwLZSpOqGSbHSjz8HzFjmr6w2y-r3-kzIKBdXLuQSiOerGcNgH8FVQnKol99pIyEqzkCvSvR6dNHw8nJ2MKulKfihUBsJNAKdI0IVOMKO4vT33d"
        },
        {
            title: "Coding Fundamentals",
            author: "Ethan Carter",
            price: "$30",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgznOrGKvKzZZpjy2jH6up58vMhEAeowxEqTpDe5j1ZxHDccjEPBZ83Znx6P2bWpEm6s_JCxCrV2I8ImZzj59jgp34Te7trmMvZAnda4g0TIUNL4ycIOkawExLX2iRibulbXNZ-YiKpUtknkysZCinCd6LhavJRMVllswS03uya_LMiDm93uc9_7w8jGAUSmfIGdz_SagY44J8v-StS7njgDTOPG2solpLVlW0MobRTfVbre9kwgWf4YtJCLivRUk2VFZKfBLgs2eI"
        },
        {
            title: "Creative Writing",
            author: "Olivia Hayes",
            price: "$20",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPCjVykRgBsQyFqb4nhC-Uh2zNRcl5cetee7umHQ2VY_48NWYhTmTnmATS5u08j-9FrFD2wfOUyRR9CouVRhHc8WMRSLkx5phZulBbbKrH5S-mRUFINMUUnoO-aibIZmwMRIH2QcZeYn7xDv6PZp13BIUsb1WoFjjT8ykKPtTtht2uNqQ51TroqpN1pcpXHtw9mrHIjd22cBdEOwHd1RqBDsyxqKEGH6tMOXBgct8vm73DPm0flkIVwxY6MFQT6NGUrf6VBnc2E7_M"
        },
        {
            title: "Digital Marketing",
            author: "Noah Thompson",
            price: "$35",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkFpLi2ZF8YLs0RBODgMaTWLamsaIfJjv0EDDm2LjSz36jtWe8OAhlsQt9uhDhYiMWQ1T9qhlIM5Px7EAlnAu0elEEnJFDx1Rzv8P0I9AIm8FKPQDCojQdVnzZ9byOp-vCBYOSmyJOj8q_IZ1GR3raqBWCl6Gzbzwz2x3YzjK95ps-5fnz_imn3QmsKaimVKX_KLDHGSA2k_7gJK5lauLGHctuVcyJPNIy6c3iDajRY1LZn5_myTBhKb8OkhDIMTPV7ott8VNpDWAW"
        },
        {
            title: "Graphic Design",
            author: "Ava Mitchell",
            price: "$40",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfcd5Jf_PjDbhfwThxa8WHWndZDw6S8LRFoxJojoJzQeRa8hy3buy3dS54jRylVS9oS-oeh_g9V1Udr-wPkx1OYIL5B7J1FuBpOulZ6Eu7FWaUnqdJV95mQSGIqHYTjn_ph0bXNorZ98O2iryNbwJ1U3uoGq6op5m_nn9V3clmys24KPZy0GnDiRSSB8TJnTj-imy6hKVnhRNv1cLAC-2B5Q50qeAuUJncXOBAOpreyDxOvB0Z6eIwUuSklsOLv1RAJnDeg4PRtXRH"
        },
        {
            title: "Music Production",
            author: "Caleb Foster",
            price: "$28",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTtTN6LhTkxqD59rSm8LRtlSPcJWPdXQBirSAZuMInbYN-dpzAhtxMZnYMgua21rHRPC_kn91payze4KsLXOoLaOFcY6MuxHabF5j3W7qYyatnpYNkhWje3WCP61HF4zvsIoHPix-2vJlfWtv3AMg1zIeUIt2qY1Im4qBtEJOv6xfPVMpA_oB2-xWmKm_VX4C2YeIOJJh1EgJEJqdKjX_-KiblfQhTaxLGcetFHHgVqtXl1viTfO_wLuY3jo6dxWnBUDhZd_cDxUmI"
        },
        {
            title: "Video Editing",
            author: "Isabella Reed",
            price: "$32",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsSUeMviMpmvR2wNoFCrd5lt2N8pbUebZWcCbNN5VZ9vZMnTPE2yxc4q7l1U_2HSJ52sz1PpCVrNu_MGYAU7IksY6ikQqkZ5h-cq4Kibky996wUApGfAJLL5BdJjWsbskvYj8EOvSRxO6fRoAQK9oKJAdrQPwIcgBwpWeeC1_wX9_7jgSRE03ZgdyMNeXLR3_USy-94iXSfbv8rtKbWHRhk9HRMiTJ4kaSMOtpy-cf5qwV-6rrUxLNCeCXtsRzxfqnMFHXDOWBq1NG"
        },
        {
            title: "Web Development",
            author: "Jackson Cole",
            price: "$38",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Iww9QvAcBLCELRlYjvcgJvfgbmzTfThbh8Reo9LxboakYWAbxykxPMFetHmvjHaMaxSxEMi-RnAOPx0etaqO2A3t6LEXuFj8sZL01awMqkSyqUB8MNpXHFma_mfmpEWdMgOf6SlKqAPZT_9ofYhrvCdQcSsq5jY5AMe6NYpEYnHsa97QKXsd8J1aUp4IUYf9z_tENlypH3bzt308gIvUDUuRKT8HYCfWMm_TMR3IIDg0hNjQdCCu945G1AQnqGz_jXWhI60WjYjt"
        },
        {
            title: "UI/UX Design",
            author: "Mia Harper",
            price: "$45",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_u4JYtc0qHC-1qg6iruMXYJbriGbgPuK6DxoGqrurWf74t4m_n_PG7-Z7qc_RmPCbzGXJr8K2r8Im9MxK3CKut2K83KzfQAutweMns9WKM7JxC_mLeK7NlaAyq9Z6USDJxGW8pRC9u_BFkw4mdNODCpW59bVkmjMfbMYQaQ08COdO1Enb7svfxRxWB8Xxm-NepA1Gcqien2wk8JyyJ_VELFJjuTU_gAMBuPUTi4qCAYW1v8LCxBFRMHdSkoSuvWgHOQKWUEnoIw1q"
        },
        {
            title: "Data Analysis",
            author: "Lucas Bennett",
            price: "$50",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnyeLA_Q3rm0wsJgF-pK7aBRmgXGSiFqiyW94IKJPzwudcw6s5-gN08EQa2qLndu4em0EAeNXh1A8uoqAIox8YSSqY7IGILF1eJSpobjUMcCjCgJv8OaTaBQVEJcEkdDEDjQm5lxUhyy3ByY9gDSJ6PjeR87AtBPF096X33ioc1TsVTTA0j6x28AWXxl6NW3_3wWpYNw3ReH66cd5PDQvxd88jPgTY4dJ717SLB8KM4IgCIb9g7kaY7PtcOAJbUo24z46dzBQBnvKB"
        }
    ];

    return (
        <div className="flex flex-col w-full flex-1">
            {/* Header */}
            <AppHeader title="Search" />

            {/* Search Bar */}
            <div className="p-4">
                <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <SearchIcon className="h-5 w-5" />
                    </div>
                    <Input
                        placeholder="Search skills or listings"
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Filter Button */}
            <div className="px-4">
                <FilterDrawer trigger={<Button variant="secondary" size={'sm'}>
                    Filters
                    <ChevronDown className="h-4 w-4" />
                </Button>}
                />
            </div>

            {/* Listings */}
            <div className="mt-4">
                {listings.map((listing, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-4">
                            <div
                                className="bg-cover bg-center rounded-lg w-14 h-14"
                                style={{ backgroundImage: `url(${listing.image})` }}
                            />
                            <div className="max-w-[70%]">
                                <h3 className="font-medium line-clamp-1">{listing.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-1">{listing.author}</p>
                            </div>
                        </div>
                        <p className="font-medium">{listing.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}