function Home() {
  return (
    <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800 min-h-[88vh]">
      <div class="container relative flex px-10 py-14 lg:px-20 mx-auto">
        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 class="flex flex-col text-4xl font-black leading-none text-gray-800 uppercase font-sans sm:text-7xl dark:text-white">
            Become a React
            <span class="text-5xl sm:text-7xl">Developer</span>
          </h1>
          <p class="text-sm text-gray-700 capitalize sm:text-base dark:text-white">
            let's study react together!
          </p>
          <div class="flex mt-8">
            <a
              href="#"
              class="px-4 py-2 mr-4 text-white uppercase bg-lime-500 border-2 border-transparent rounded-lg text-md hover:bg-lime-400"
            >
              Join Now
            </a>
            <a
              href="#"
              class="px-4 py-2 text-lime-500 uppercase bg-transparent border-2 border-lime-500 rounded-lg dark:text-white hover:bg-lime-500 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        <div class=" hidden md:block sm:block  ">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className=" lg:w-[800px]"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
