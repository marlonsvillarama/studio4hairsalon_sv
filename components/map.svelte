<script>
    const KEY = 'AIzaSyAkzcOGc8ScKj-12XHFU90hKGfTw1-MaP4';
    const URL = `https://www.google.com/maps/embed/v1/place?key=${KEY}&q=Studio+4+Hair+Salon&center=-40.3555882,175.6082909`;
</script>

<section id="map">
    <iframe title="Studio4 Hair Salon" src={URL} frameborder="0"></iframe>
</section>

<style>
    #map {
        width: 100%;
        height: 24rem;
        /* border: 1px solid red; */
    }
    #map iframe {
        border: 0;
        width: 100%;
        height: 100%;
    }
</style>