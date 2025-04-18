<script>
    import Full from '../../static/drive/H-80-crop.jpg';
    import InAction from '../../static/drive/H-6-crop.jpg';
</script>

<section class="wrapper">
    <div class="profile">
        <p>Led by <span class="emp accent">John Fernandez</span>, a seasoned professional with over 20 years of international experience, we bring world-class expertise and creativity to every client.</p>
        <p>John’s journey spans the vibrant salons of Dubai, the dynamic multi-franchise networks of the Philippines, and the innovative hair industry of New Zealand.</p>
        <p>This extensive background combines diverse techniques, global trends, and a passion for excellence to ensure you receive a look tailored specifically to your unique style.</p>
        
        <a href="/book" class="btn cta">BOOK NOW</a>
    </div>
    <div class="pics">
        <img src={Full} alt="John Fernandez">
        <img src={InAction} alt="John Fernandez in action">
    </div>
</section>

<style>
    section {
        margin-top: 3rem;
        margin-bottom: 3rem;
        /* border: 0px solid red; */
        display: flex;
        flex-direction: column;
        /* grid-template-columns: calc(60% - 3rem) 40%; */
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }
    @media (min-width: 64rem) {
        section {
            display: grid;
            grid-template-columns: calc(30% - 4rem) 70%;
            align-items: flex-start;
            justify-content: center;
        }
    }
    section > * {
        border: 0px solid red;
    }
    .pics {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 40rem) {
        .pics {
            flex-direction: row;
        }
    }
    .pics img {
        width: 100%;
        box-shadow: var(--box-shadow);
    }
    /* .profile {
        border: 1px solid red;
    } */
    .profile p {
        line-height: 2rem;
        margin-bottom: 2.5rem;
        font-weight: 100;
    }
    .cta {
        padding: 0.75rem 2.5rem;
        background-color: var(--color-bg-btn);
        /* border: 1px solid red; */
        border-radius: 0.25rem;
        color: white;
        font-size: var(--fs-md);
        /* margin-left: 2rem; */
        transition: all 100ms ease-in-out;
        box-shadow: var(--button-shadow);
        display: block;
        text-align: center;
    }
    /* @media (min-width: 64px) {
        .cta {
            display: inline-block;
        }
    } */
    .cta:hover {
        background-color: var(--color-bg-btn-hover);
        transform: translateY(-2px);
        /* box-shadow: rgba(255, 255, 255, 0.5) 0px 0 4px; */
    }
</style>