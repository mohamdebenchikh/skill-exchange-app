import AppHeader from "@/components/app-header";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Privacy Policy" />
      
      <div className="space-y-6 p-4">
        <div>
          <h3 className="text-foreground text-xl font-bold pb-2">
            Data Collection
          </h3>
          <p className="text-muted-foreground">
            We collect information you provide directly to us, such as when you
            create an account, update your profile, or interact with other users.
            This may include your name, email address, skills, and any other
            information you choose to share.
          </p>
        </div>

        <div>
          <h3 className="text-foreground text-xl font-bold pb-2">
            Use of Information
          </h3>
          <p className="text-muted-foreground">
            The information we collect is used to provide, maintain, and improve
            our services, including connecting you with other users, facilitating
            skill exchanges, and personalizing your experience. We may also use
            your information to communicate with you about updates, promotions,
            and other relevant information.
          </p>
        </div>

        <div>
          <h3 className="text-foreground text-xl font-bold pb-2">
            Your Rights
          </h3>
          <p className="text-muted-foreground">
            You have the right to access, correct, or delete your personal
            information. You can manage your account settings or contact us
            directly to exercise these rights. We are committed to protecting
            your privacy and ensuring you have control over your information.
          </p>
        </div>
      </div>

      <div className="mt-auto pb-6">
        <p className="text-muted-foreground text-sm text-center underline">
          Contact us for questions
        </p>
      </div>
    </div>
  );
}