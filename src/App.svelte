<script lang="ts">
  import "@fontsource/oxygen";

  let files: FileList;

  function handleFileChange(event: any) {
    files = event.target.files;
  }

  async function handleSubmit() {
    const formData = new FormData();
    formData.append('file', files[0]); // Assuming you are uploading a single file

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });

        // Handle response as needed
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

</script>

<div class="container">
  <h1 class="heading">Convert your Piped playlists to mp3</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="file" bind:files on:change={handleFileChange} id="choose-files" />
    <button type="submit">Upload File(s)</button>
  </form>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202020;
    height: 100vh;
    width: 100%;
  }
  .heading {
    color: #fff;
    margin-top: 3rem;
  }
  #choose-files {
    margin-top: 2rem;
    color: #fff;
  }
</style>
