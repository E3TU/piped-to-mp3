<script lang="ts">
  import "@fontsource/oxygen";
  let data: any; 

  async function fetchData() {
    const res = await fetch("http://localhost:3000/test");
    data = await res.json();
    console.log(data.hello);
  }
  
  let files: any;

  $: if (files) {
    for (const file of files) {
      console.log(`${file.name}: ${file.size} bytes`);
    }
  }


</script>

<div class="container">
  <h1 class="heading">Convert your Piped playlists to mp3</h1>
  <input bind:files id="choose-files" multiple type="file">
  <button on:click={fetchData}>Upload File(s)</button>
</div>

<style>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202020;
    height: 100vh;
    width: 100%;
  }
  .heading{
    color: #fff;
    margin-top: 3rem;
  }
  #choose-files{
    margin-top: 2rem;
    color: #fff;
  }
</style>