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
      path: "options",
    },

    options: {
      message: "How can I help you today?",
      options: [
        "📅 Book Appointment",
        "👨‍⚕️ View Doctors",
        "🕒 ClinicLink Timing",
      ],
      path: (params) => {
        const input = params.userInput.toLowerCase().trim();

        // Greetings
        if (
          input === "hi" ||
          input === "hello" ||
          input === "hey" ||
          input.includes("good morning") ||
          input.includes("good afternoon") ||
          input.includes("good evening")
        ) {
          return "greeting";
        }

        // Appointment
        if (
          input.includes("book") ||
          input.includes("appointment")
        ) {
          return "book";
        }

        // Doctors
        if (
          input.includes("doctor") ||
          input.includes("doctors")
        ) {
          return "doctors";
        }

        // Timing
        if (
          input.includes("timing") ||
          input.includes("time") ||
          input.includes("opening") ||
          input.includes("hours")
        ) {
          return "timing";
        }

        // Thanks
        if (
          input.includes("thank") ||
          input.includes("thanks")
        ) {
          return "thanks";
        }

        return "fallback";
      },
    },

    greeting: {
      message:
        "😊 Hello! Welcome to ClinicLink. How can I help you today?",
      path: "options",
    },

    doctors: {
      message: "👉 Opening doctors page...",
      component: () => {
        navigate("/doctors");
        return null;
      },
    },

    book: {
      message: "👉 Opening appointment page...",
      component: () => {
        navigate("/appointments");
        return null;
      },
    },

    timing: {
      message: "🕒 ClinicLink is open from 9 AM to 9 PM.",
      path: "end",
    },

    thanks: {
      message: "😊 You're welcome! Is there anything else I can help you with?",
      path: "options",
    },

    fallback: {
      message:
        "🤔 I'm sorry, I didn't understand that. You can ask about appointments, doctors, or clinic timings.",
      path: "options",
    },

    end: {
      message: "👍 Need anything else?",
      path: "options",
    },
  };

  const settings = {
    header: {
      title: "ClinicLink Assistant",
    },
  };

  return <ChatBot flow={flow} settings={settings} />;
};

export default Chatbot;