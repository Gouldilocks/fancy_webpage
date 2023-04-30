export const data = [

    {
      id: 0, // id is used for the key in the map function
      image: "https://www.pngfind.com/pngs/m/686-6867937_connect-four-png-transparent-png.png",
      title: 'AI',
      description:
        "I have created a Connect 4 AI, and have won the SMU 2022 AI competition with it. This AI uses the Minimax algorithm, and is built with Python. This AI is able to beat most human players, and was able to beat all other AI players in the SMU AI competition. I have made a website that allows you to play against this AI, although it is severely curbed in its ability to play, since on the deployment server, it is unable to run a great depth for the minimax algorithm.",
      link: "http://ec2-18-208-183-26.compute-1.amazonaws.com:3000",
    },
    
    {
      id: 1,
      image: "https://www.w3schools.com/whatis/img_js.png",
      title: "Web Design",
      description:
        "I have created a website from scratch, which is fully backend integrated, called \"Ranchy\". This website allows ranchers to more easily manage their ranch, and allows for the creation of new ranchs. This website is built with React, and was hosted on AWS. This website is fully responsive, and allows for mobile viewing",
      link: "https://github.com/Gouldilocks/DB-GUI-S22",
    },

    {
      id: 2,
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/machineLearning3.png",
      title: "Machine Learning",
      description:
        "I have created a project called piFace, which is a Raspberry Pi based project that allows for the creation of a face recognition and emotion detection system. This project is built with Python, and uses the OpenCV library, along with the dlib library. It uses a model that is trained on a large dataset of faces which were pre-sorted, and uses that while detecting faces from your webcam.",
      link: "https://github.com/Gouldilocks/piFace",
    },

    {
      id: 3,
      image: "https://media.istockphoto.com/vectors/orange-automatic-vending-machine-isolated-vector-illustration-vector-id836212440?k=20&m=836212440&s=612x612&w=0&h=MIAlYYISjL0TWAPyAgvVDU1jK9MRzceqPEDe913sKmU=",
      title: "Hardware",
      description:
        "I created a Vending machine for one of my TA positions, which is an Arduino/Raspberry pi project. It uses Pandas dataframes and google's API for editing a google sheets page for use as a database. This vending machine was used for proper student material distribution, and was made using Google Sheets in order for other non-Computer savy TA's to manage it effectively.",
      link: "https://github.com/Gouldilocks/Vmachine",
    },

    {
      id: 4, // id is used for the key in the map function
      image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Reddit_icon.svg",
      title: 'Personal Fun',
      description:"I have created an automated bot that pulls data from the Reddit API, and using FFMPEG, it creates a video of the top posts of the day from the subreddit r/AskReddit. This bot is built with Python, and is able to run every day. It has a secondary function that allows it to automatically upload those videos onto tiktok, and it is able to do this without the TikTok API, but with the desktop application.",
      link: "https://github.com/Gouldilocks/Reddit_Bot",
    },

];
