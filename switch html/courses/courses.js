const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// header focus on inputelement and click information
const headerInputElement = $('.header__search-wrap input')
const rootElement = $('.app__wrap')
const bellBtn = $('.header__information-notify')
const boxNotify = $('.header__information-notify-box');
const inforImg = $('.header__information-img');
const boxUser = $('.header__information-user-box')


bellBtn.onclick = function() {
    boxNotify.classList.toggle('isopen')
}

bellBtn.addEventListener('click',function(e) {
    e.stopPropagation()
})

boxNotify.addEventListener('click', function(e) {
    e.stopPropagation()
})

headerInputElement.onfocus = function () {
    $('.header__search-wrap').style.border = '1px solid var(--primary-color)';
    
}
rootElement.onclick = function () {
    $('.header__search-wrap').style.border = '1px solid rgba(0, 0, 0, 0.1)'
    // Close boxNotify when click app
    boxNotify.classList.remove('isopen')
    // Close userBox when click app
    boxUser.classList.remove('isopen')
    // Close addBox
    addIcon.classList.remove('isrotate');
    boxAdd.classList.remove('isopen')
}

headerInputElement.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Click infor
inforImg.onclick = function() {
    boxUser.classList.toggle('isopen')
}

inforImg.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxUser.addEventListener('click', function(e) {
    e.stopPropagation()
})


// Add js

const addBtn = $('.page__sidebar-add-item-link')
const addIcon = $('.page__sidebar-add-item-icon')
const boxAdd = $('.page__sidebar-add-box')

addBtn.onclick = function() {
    addIcon.classList.toggle('isrotate');
    boxAdd.classList.toggle('isopen')
}

addBtn.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxAdd.addEventListener('click', function(e) {
    e.stopPropagation()
})


// Courses section
const courseList = $('.courses__content-courses-list-cover');

const coursesApp = {
    coursesWidth: 50,
    index: 0,
    courses: [
        {
            name: 'Javascript cơ bản',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/1.png',
            link: './javascript-course.html'
        },
        {
            name: 'HTML, CSS từ Zero đến Hero',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/2.png',
            link: './html-css-course.html'
        },
        {
            name: 'Don\'t Touch Your Face',
            img: 'https://b.f9.photo.talk.zdn.vn/3467470727949930237/38bd9744143ddc63852c.jpg'
        },
        {
            name: 'Javascript nâng cao',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/12.png'
        },
        {
            name: 'ReactJS',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png'
        },
        {
            name: 'Node & ExpressJS',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/6.png'
        },
        {
            name: 'Kiến Thức Nhập Môn',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/7.png'
        },
        {
            name: 'Responsive Với Grid System',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/3.png'
        },
        {
            name: 'HTML, CSS Tips & Tricks',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/5.png'
        }
    ],

    
    
    // Render course
    render: function() {
        const htmlsCourse = this.courses.map((data) => {
            return `
            <div class="grid__column-3">
                <div class="courses__content-courses-item">
                    <a href="${data.link}" class="courses__content-courses-link">
                        <img src="${data.img}" alt="" class="courses__content-courses-img">
                    </a>
                    <a href="" class="courses__content-courses-description">
                        <h3 class="courses__content-courses-description-text">${data.name}</h3>
                    </a>
                </div>
            </div>
            `
        })
        
        courseList.innerHTML = htmlsCourse.join('') 
        
    },

    start: function () {
        this.render()
    }
}
    
coursesApp.start()


const pageContent = document.querySelector('.courses__content')
var testLink = pageContent.getElementsByTagName('a')

const noticeWarn = document.querySelector('#notice')
for(let i = 0; i < testLink.length; i++) {
    const testLinks = testLink[i]
    if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
        testLinks.setAttribute("href", "#")
        testLinks.addEventListener('click', function(e) {
            e.preventDefault()
        })
    }

    testLinks.onclick = function() {
        if(testLinks.getAttribute('href') === '#') {
            const warning = document.createElement('div')
            warning.classList.add('notice__warn');
            warning.innerHTML = `
                <div class="notice__warn-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="notice__warn-content">
                    <h3 class="notice__warn-heading">Thông báo</h3>
                    <span class="notice__warn-message">Nội dung đang trong quá trình hoàn thiện !</span>
                </div>
            `
            noticeWarn.appendChild(warning)

            setTimeout(function() {
                noticeWarn.removeChild(warning)
            },2500)
        }
    }
}


const menuRespon = document.querySelector('.header__icon-menu')
const sidebarRespon = document.querySelector('.side__bar-respon')
const sidebarLeft = document.querySelector('.side__bar-respon-left')
const exitSibar = document.querySelector('.side__bar-respon-right')

menuRespon.onclick = function() {
    sidebarRespon.classList.add('iscover-fill');
    sidebarLeft.classList.add('isopen-sidebar-respon')
}

exitSibar.onclick = function() {
    sidebarRespon.classList.remove('iscover-fill');
    sidebarLeft.classList.remove('isopen-sidebar-respon')
}