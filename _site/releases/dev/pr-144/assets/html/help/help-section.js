
let eNavigator
let eFooterNavigator
let ePrev
let eNext
let eCurrentPageTitle
let currentPage
let pages

window.addEventListener('DOMContentLoaded', function() {
    pages = discoverPages()
    eNavigator = createNavigatorHeader()
    eFooterNavigator = createFooterNavigator()

    eBack = requireElementById('back-button')
    ePrev = requireElementById('prev')
    eNext = requireElementById('next')
    eCurrentPageTitle = requireElementById('currentPageText')

    ePrev.addEventListener('click', () => {
        navigate(-1)
    })
    eNext.addEventListener('click', () => {
        navigate(+1)
    })
    eBack.addEventListener('click', () => {
        history.back()
    })
    showPageBasedOnCurrentHash()
})

window.addEventListener('hashchange', showPageBasedOnCurrentHash)

function createNavigatorHeader() {
    const element = requireElementById('navigator')
    const html = `<nav>
    <a id='back-button' class='nav-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path fill="#636b6e" fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"/>
        </svg>
    </a>
    <div id='currentPage'>
        <h1 id='currentPageText'></h1>
    </div>
    <a href='./' class='nav-button'><svg class='svg-icon' width="17" height="17" viewBox="0 0 4.4979 4.4979" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-97.231 -62.155)" fill="#636b6e"><path d="m97.959 64.03v2.623h1.078v-1.3229h0.81009v1.3229h1.078v-2.623z" stop-color="#000000" stroke-width=".28265" style="-inkscape-stroke:none;paint-order:stroke markers fill"/><path transform="matrix(.32946 0 0 .21753 97.238 61.632)" d="m13.624 14.214c-0.27271 0.47235-13.363 0.47235-13.636 0-0.27271-0.47235 6.2724-11.809 6.8178-11.809s7.0905 11.336 6.8178 11.809z" stop-color="#000000" stroke-width=".26458" style="-inkscape-stroke:none;paint-order:stroke markers fill"/></g></svg></a>
</nav>`
    element.innerHTML = html
    return element
}

function requireElementById(id) {
    const element = document.getElementById(id)
    if (!element) throw new Error(`Required element with id "${id}" not found in the page.`)
    return element
}

function createFooterNavigator() {
    const element = requireElementById('footer-navigator')
    const html = `<a id='prev' class='nav-button'>previous page</a>
<span> </span>
    <a id='next' class='nav-button'>next page</a>`
    element.innerHTML = html
    return element
}

function discoverPages() {
    const pageElements = document.getElementsByClassName('page')
    pages = []
    for (let page of pageElements) {
        pages.push({
            key: page.id,
            title: page.getAttribute('data-title')
        })
    }
    console.log(pages)
    return pages
}

function showPageBasedOnCurrentHash() {
    currentPage = location.hash.slice(1)
    showPage(currentPage)
}

function showPage(pageKey) {
    currentPage = pageKey
    let pageIndex = pages.findIndex(p=>p.key===pageKey)
    if (pageIndex === -1) {
        pageIndex = 0
        pageKey = pages[0].key
    }

    eCurrentPageTitle.innerText = pages[pageIndex].title
    const prevPage = pages[pageIndex - 1]
    const nextPage = pages[pageIndex + 1]
    if (prevPage) {
        ePrev.innerText = '< ' + prevPage.title
        setVisible(ePrev, true)
    } else {
        ePrev.innerText = '< '
        setVisible(ePrev, false)
    }
    if (nextPage) {
        eNext.innerText = nextPage.title + ' >'
        setVisible(eNext, true)
    } else {
        eNext.innerText = ' >'
        setVisible(eNext, false)
    }

    const pageElements = document.getElementsByClassName('page')
    for (let page of pageElements) {
        setVisible(page, page.id === pageKey)
    }
}

function navigate(delta) {
    let currentPageIndex = pages.findIndex(page => page.key === currentPage)
    if (currentPageIndex === -1) currentPageIndex = 0
    currentPageIndex += delta
    if (currentPageIndex < 0) currentPageIndex = 0
    if (currentPageIndex >= pages.length) currentPageIndex = pages.length - 1

    window.location.hash = pages[currentPageIndex].key
}

function setVisible(element, visible) {
    if (visible) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    }
}
