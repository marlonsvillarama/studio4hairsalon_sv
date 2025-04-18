<script></script>

<section class="wrapper">
    <div class="hours">
        <span class="title">Opening Hours</span>

    </div>
    <div class="separator"></div>
    <div class="contact">
        <span class="title">Contact Info</span>
    </div>
</section>

<style>
    section {
        /* border: 1px solid red; */
        margin-top: 3rem;
        margin-bottom: 3rem;
        /* border: 0px solid red; */
        display: flex;
        flex-direction: column;
        /* grid-template-columns: calc(60% - 3rem) 40%; */
        align-items: center;
        justify-content: center;
        /* gap: 4rem; */
        /* border-collapse: collapse; */
    }
    @media (min-width: 64rem) {
        section {
            /* width: 100%; */
            display: grid;
            grid-template-columns: 1fr 1px 1fr;
            /* gap: 4rem; */
            align-items: flex-start;
            /* justify-content: center; */
        }
    }
    section > div {
        border: 0px solid red;
        border-collapse: collapse;
        height: 100px;
        text-align: center;
    }
    .separator {
        background-color: var(--color-accent);
    }
    .title {
        font-family: var(--font-serif);
        font-optical-sizing: auto;
        font-size: var(--fs-2xl);
        font-weight: 700;
        color: var(--color-accent);
        letter-spacing: 0.25px;
        /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4); */
        padding-bottom: 0.5rem;
        border-bottom: 1px dotted var(--color-border);
    }
</style>