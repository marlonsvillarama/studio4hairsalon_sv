<header>
    <a href="/"><div class="logo">Studio 4</div></a>

    <!-- <nav>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/reviews">Reviews</a>
        <a href="/contact">Contact</a>
    </nav> -->
</header>

<style>
    header {
        /* background-color: rgba(47, 49, 50, 0.7); */
        /* background-color: rgba(218, 165, 32, 0.5); */
        /* background-color: transparent; */
        /* border-bottom: 1px solid red; */
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 5rem 0.5rem;
        /* width: 100%; */
        z-index: 999;
        position: relative;
    }
    /* header nav {
        position: absolute;
        top: 50%;
        left: 0;
    } */
    /* header > * {
        border: 1px solid red;
    } */
    header a {
        cursor: pointer;
        /* border: 1px solid red; */
    }
    /* nav {
        border: 1px solid red;
    } */
    nav a {
        color: white;
        margin-left: 0.25rem;
        padding: 1rem 2rem;
        /* border: 1px solid green; */
        transition: all 150ms ease-in-out;
        font-size: var(--fs-sm);
        font-weight: 300;
        letter-spacing: 0.75px;
    }
    nav a:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0.5rem;
        color: var(--color-accent);
        /* font-size: var(--fs-md); */
        /* font-weight: 500; */
        /* text-decoration: underline; */
    }
</style>