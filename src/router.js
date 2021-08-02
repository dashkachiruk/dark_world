import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import landingPage from "./components/LandingPage/landingPage";
import catalog from "./components/Catalog/Catalog";
import Donate from "./components/Donate/Donate";
import EventPage from "./components/CatalogEvent/EventPage";
import Bank from "./components/Bank/Bank";
import AdminPage from "./components/AdminPage/AdminPage";
import AdminCalendar from "./components/AdminPage/AdminCalendar";
import AdminContacts from "./components/AdminPage/AdminContacts";
import AdminEventsList from "./components/AdminPage/AdminEventsList";
import AdminReviews from "./components/AdminPage/AdminReviews";
import AuthForm from "./components/AdminPage/Forms/AuthForm";
import AdminEditReviews from "./components/AdminPage/AdminEditReviews";
import AddEventToCalendar from "./components/AdminPage/Forms/AddEventToCalendar";
import CreateEventForm from "./components/AdminPage/Forms/CreateEventForm";
import EditEventForm from "./components/AdminPage/Forms/EditEventForm";
import AddEventNote from "./components/AdminPage/Forms/Notifications/AddEventNote";
import ContactForm from "./components/LandingPage/Landing_forms/ContactForm";
import ReviewForm from "./components/LandingPage/Landing_forms/ReviewForm";
import SertificateForm from "./components/LandingPage/Landing_forms/SertificateForm";
import AdminMessages from "./components/AdminPage/AdminMessages";
import ContactDonateForm from "./components/LandingPage/Landing_forms/ContactDonateForm";

const routes = [

  {
    path: '/',
    name: 'darkWorld',
    title: 'darkWorld',
    component: landingPage,
    children: [
      // {
      //   path: 'contact',
      //   name: 'contactForm',
      //   title: 'contactForm',
      //   component: ContactForm,
      // },
      // {
      //   path: 'review',
      //   name: 'reviewForm',
      //   title: 'reviewForm',
      //   component: ReviewForm,
      // },
      // {
      //   path: 'sertificate',
      //   name: 'sertificateForm',
      //   title: 'sertificateForm',
      //   component: SertificateForm,
      // },

    ]
  },
  {
    path: '/catalog',
    name: 'catalog',
    title: 'catalog',
    component: catalog,
    // children: [
    //   {
    //     path: 'contact',
    //     name: 'contactFormCatalog',
    //     title: 'contactFormCatalog',
    //     component: ContactForm,
    //   },
    //   ]
  },
  {
    path: '/catalog/:eventId',
    name: 'event',
    title: 'event',
    component: EventPage,
    // children: [
    //   {
    //     path: 'contact',
    //     name: 'contactFormEvent',
    //     title: 'contactFormEnent',
    //     component: ContactForm,
    //   },
    // ]
  },
  {
    path: '/donate',
    name: 'donate',
    title: 'donate',
    component: Donate,
    // children: [
    //   {
    //     path: 'contact_donate',
    //     name: 'contactFormDonate',
    //     title: 'contactFormDonate',
    //     component: ContactDonateForm,
    //   },
    // ]
  },
  {
    path: '/bank',
    name: 'bank',
    title: 'bank',
    component: Bank,
  },
  // {
  //   path: '/admin_page',
  //   name: 'adminPage',
  //   title: 'adminPage',
  //   component: AdminPage,
  //   redirect: {name: 'authForm'},
  //   children: [
  //     {
  //       path: 'authorization',
  //       name: 'authForm',
  //       title: 'authForm',
  //       component: AuthForm,
  //     },
  //     {
  //       path: 'messages',
  //       name: 'adminMessages',
  //       title: 'adminMessages',
  //       component: AdminMessages,
  //     },
  //     {
  //       path: 'calendar',
  //       name: 'adminCalendar',
  //       title: 'adminCalendar',
  //       component: AdminCalendar,
  //       children: [
  //         {
  //           path: 'add_event',
  //           name: 'calendarNewEvent',
  //           title: 'calendarNewEvent',
  //           component: AddEventToCalendar,
  //         },
  //       ]
  //     },
  //     {
  //       path: 'contacts',
  //       name: 'adminContacts',
  //       title: 'adminContacts',
  //       component: AdminContacts,
  //     },
  //     {
  //       path: 'events',
  //       name: 'adminEvents',
  //       title: 'adminEvents',
  //       component: AdminEventsList,
  //       children: [
  //         {
  //           path: 'new_event',
  //           name: 'NewEvent',
  //           title: 'NewEvent',
  //           component: CreateEventForm,
  //           children: [
  //             {
  //               path: 'add_event_note',
  //               name: 'addEventNote',
  //               title: 'addEventNote',
  //               component: AddEventNote,
  //             },
  //           ]
  //         },
  //         {
  //           path: 'edit_event/:eventId',
  //           name: 'EditEvent',
  //           title: 'EditEvent',
  //           component: EditEventForm,
  //         },
  //       ]
  //     },
  //     {
  //       path: 'reviews',
  //       name: 'adminReviews',
  //       title: 'adminReviews',
  //       component: AdminReviews,
  //     },
  //     {
  //       path: 'reviews_edit',
  //       name: 'adminReviewsEdit',
  //       title: 'adminReviewsEdit',
  //       component: AdminEditReviews,
  //     },
  //   ]
  // },

  {
    path: '*',
    redirect: {name: 'darkWorld'},
  },
];

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    } else if (savedPosition) {
      return savedPosition
    }
    else {
      return {x: 0, y: 0}
    }
  },
  mode: 'history'
});
