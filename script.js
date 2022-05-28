const kt = () => {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then((data) => data.json())
      .then((data_val) => {
        const u_data = data_val.url;
        document.getElementById("myImg").src = u_data;
        console.log(u_data);
      });
  };
  kt();
  
  const F = () =>{
    kt();
  }