import { Route, Routes } from "react-router"
import Welcome from "./pages/welcome"
import SignUp from "./pages/auth/sign-up"
import SignIn from "./pages/auth/sign-in"
import ForgotPassword from "./pages/auth/forgot-password"
import VerifyEmail from "./pages/auth/verify-email"
import ResetPassword from "./pages/auth/reset-password"
import AuthLayout from "./layouts/auth-layout"
import ProfileOnboarding from "./pages/profile-onboarding"
import Profile from "./pages/profile"
import EditProfile from "./pages/edit-profile"
import AccountSettings from "./pages/account-settings"
import ChangePassword from "./pages/change-password"
import CreateNewListing from "./pages/create-new-listing"
import { EditListing } from "./pages/edit-listing"
import { ListingDetails } from "./pages/listing-details"
import SearchResults from "./pages/search-results"
import LocationSearch from "./pages/location-search"
import SetAvailability from "./pages/set-availability"
import BookingRequest from "./pages/booking-request"
import BookingConfirmation from "./pages/booking-confirmation"
import BookingList from "./pages/booking-list"
import BookingRequestsList from "./pages/booking-requests-list"
import BookingDetails from "./pages/booking-details"
import Chat from "./pages/chat"
import LeaveReview from "./pages/leave-review"
import Favorites from "./pages/favorites"
import Notifications from "./pages/notifications"
import Reschedule from "./pages/reschedule"
import Payment from "./pages/peyment"
import Settings from "./pages/settings"
import LanguageSelection from "./pages/language-selection"
import CompleteProfile from "./pages/complete-profile"
import TermsOfService from "./pages/terms-of-serverce"
import PrivacyPolicy from "./pages/privacy-policy"
import ReportListing from "./pages/report-listing"
import BlockedUsers from "./pages/bloked-users"
import Feedback from "./pages/feedback"
import HelpCenter from "./pages/help-center"
import ContactSupport from "./pages/contact-support"
import NotFound from "./pages/not-found"
import ErrorPage from "./pages/error-page"
import Maintenance from "./pages/maintenance"
import DeleteAccount from "./pages/delete-account"
import AppLayout from "./layouts/app-layout"

function App() {
  return (
    <div className="flex p-0 md:py-4 h-screen flex-col items-center justify-center" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>

      <div className="h-full flex flex-col relative max-w-sm w-full mx-auto rounded-xl border shadow-md overflow-auto bg-background">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<AuthLayout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route element={<AppLayout />}>


            <Route path="/profile-onboarding" element={<ProfileOnboarding />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="account-settings" element={<AccountSettings />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/create-new-listing" element={<CreateNewListing />} />
            <Route path="/edit-listing" element={<EditListing />} />
            <Route path="/listing-details" element={<ListingDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/location-search" element={<LocationSearch />} />
            <Route path="/set-availability" element={<SetAvailability />} />
            <Route path="/booking-request" element={<BookingRequest />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/booking-list" element={<BookingList />} />
            <Route path="/booking-requests-list" element={<BookingRequestsList />} />
            <Route path="/booking-details" element={<BookingDetails />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/leave-review" element={<LeaveReview />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reschedule" element={<Reschedule />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/language-selection" element={<LanguageSelection />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/report-listing" element={<ReportListing />} />
            <Route path="/blocked-users" element={<BlockedUsers />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
          </Route>

        </Routes>
      </div>
    </div>
  )
}

export default App