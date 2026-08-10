// import ChatBot from "react-chatbotify";

// const Chatbot = () => {

//   const flow = {
//     start: {
//       message: "👋 Hi there! Welcome to ClinicLink.",
//       path: "options"
//     },

//     options: {
//       message: "How can I help you today?",
//       options: [
//         "📅 Book Appointment",
//         "👨‍⚕️ View Doctors",
//         "🕒 ClinicLink Timing"
//       ],
//       path: (params) => {
//         const input = params.userInput.toLowerCase();

//         if (input.includes("book")) return "redirect";
//         if (input.includes("doctor")) return "redirect";
//         if (input.includes("timing")) return "timing";

//         return "options";
//       }
//     },

    
//     redirect: {
//       message: "👉 Opening doctors page...",
//       component: () => {
//         window.location.href = "/doctors";
//         return null;
//       }
//     },

//     timing: {
//       message: "🕒 ClinicLink is open from 9 AM to 9 PM.",
//       path: "end"
//     },

//     end: {
//       message: "👍 Need anything else?",
//       path: "options"
//     }
//   };

//   const settings = {
//     header: {
//     title: "ClinicLink Assistant"
//   }
//   };

//   return <ChatBot flow={flow} settings={settings}/>;
// };

// export default Chatbot;









import ChatBot from "react-chatbotify";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();

  const flow = {
    start: {
      message: "👋 Hi there! Welcome to ClinicLink.",
      path: "options"
    },

    options: {
      message: "How can I help you today?",
      options: [
        "📅 Book Appointment",
        "👨‍⚕️ View Doctors",
        "🕒 ClinicLink Timing"
      ],
      path: (params) => {
        const input = params.userInput.toLowerCase();

        if (input.includes("book")) return "book";
        if (input.includes("doctor")) return "doctors";
        if (input.includes("timing")) return "timing";

        return "options";
      }
    },

    doctors: {
      message: "👉 Opening doctors page...",
      component: () => {
        navigate("/doctors");
        return null;
      }
    },

    book: {
      message: "👉 Opening appointment page...",
      component: () => {
        navigate("/appointments");
        return null;
      }
    },

    timing: {
      message: "🕒 ClinicLink is open from 9 AM to 9 PM.",
      path: "end"
    },

    end: {
      message: "👍 Need anything else?",
      path: "options"
    }
  };

  const settings = {
    header: {
      title: "ClinicLink Assistant"
    }
  };

  return <ChatBot flow={flow} settings={settings} />;
};

export default Chatbot;