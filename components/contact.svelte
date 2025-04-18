<script></script>

<section id="contact">
    <div class="wrapper">
        <!-- <h1>Open today - 9am to 5pm</h1> -->
        <div id="contact-info">
            <div class="info">
                <h2>(06) 353 5678</h2>
                <span>Phone</span>
            </div>
            <div class="info">
                <h2>022 188 5240</h2>
                <span>Mobile</span>
            </div>
        </div>
        <h2>7 George Street, Palmerston North</h2>
    </div>
</section>

<style>
    #contact {
        width: 100%;
        position: relative;
        padding: 4rem 0 4rem;
    }
    #contact > * {
        /* border: 1px solid red; */
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
    h1 {
        font-size: var(--fs-3xl);
        color: var(--color-grey-dark-03-rgb);
        /* border: 1px solid red; */
        /* margin-bottom: 4rem; */
    }
    h2 {
        font-size: var(--fs-2xl);
        color: var(--color-grey-dark-03-rgb);
    }
    #contact-info {
        /* border: 1px solid green; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        text-align: center;
        margin-top: 1rem;
        gap: 4rem;
    }
    .info > h2 {
        font-size: var(--fs-3xl);
        color: goldenrod;
        /* color: var(--color-grey-dark-03-rgb); */
        margin-bottom: 1rem;
    }
    .info > span {
        color: var(--color-grey-dark-03-rgb);
        font-size: var(--fs-lg);
        font-weight: 500;
    }
</style>