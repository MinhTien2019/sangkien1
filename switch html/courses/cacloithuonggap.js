const widthDocument = document.querySelector('html')
const tabsDescription = document.querySelectorAll('.description-tab')
const panesDescription = document.querySelectorAll('.description-pane')

const paneCourse = document.querySelector('.page__js-course-app-list-respon');;
const paneContent = document.querySelector('.page__js-course-app-video-description-wrap-content')
const tabCourse = document.querySelector('.page__js-course-app-video-header-item-content');
const tabAbout = document.querySelector('.page__js-course-app-video-header-item-about')



// Hidden courses list
const appDescriptionList = document.querySelector('.page__js-course-app-video-description')
const courseBtnList = document.querySelector('.page__js-course-app-list-hidden-btn');
const courseBoxList = document.querySelector('.page__js-course-app-list');
const courseVideoApp = document.querySelector('.page__js-course-app-video');
const activeBtnCourses = document.querySelector('.page__js-course-app-video-display-btn');
const courseVideoContent = document.querySelector('.page__js-course-app-video-content');


courseBtnList.onclick = () => {
    courseBoxList.style.width = '0px';
    courseVideoApp.style.width = '100%';
    activeBtnCourses.style.opacity = '1';
    activeBtnCourses.style.display = 'flex';
    courseVideoContent.style.height = '100%';
    appDescriptionList.style.padding = '0 200px';
}


activeBtnCourses.onclick = () => {
    courseBoxList.style.width = '320px';
    courseVideoApp.style.width = 'calc(100% - 320px)';
    activeBtnCourses.style.display = 'none';
    courseVideoContent.style.height = '100%';
    appDescriptionList.style.padding = '0 80px';
}

const btnOpenStyle = getComputedStyle(activeBtnCourses)

const boxCourseListStyle = getComputedStyle(courseBoxList)
courseVideoContent.onmouseover = function() {
    if(boxCourseListStyle.width != '320px') {
        activeBtnCourses.style.opacity = '1';
        timeOut = setTimeout(function() {
            activeBtnCourses.style.opacity = '0'
        },5000)
    }
}

activeBtnCourses.onmouseover = function() {
    if(boxCourseListStyle.width != '320px') {
        activeBtnCourses.style.opacity = '1'
    }
}



// Courses List
const lessionsList = document.querySelector('.page__js-course-app-list-wrap')
const lessionsList2 = document.querySelector('.page__js-course-app-list-wrap-respon')
const lessionItemTest = document.querySelector('.page__js-course-app-list-item-wrap')
const linkVideoCourses = document.querySelector('.page__js-course-app-video-content-wrap')
const testscroll = document.querySelector('.page__js-course-app-video')


const lessionApp = {
    lessions: [
        {   stt: 1,
            title: 'Sự cố',
            lession: [
                {
                    id: 1,
                    name: ' 1.1. Sự cố phần cứng',
                    icon: 'fas fa-book-reader',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R6plN3FvzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex',
                },
                {
                    id: 2,
                    name: ' 1.2. Sự cố hệ điều hành',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="asset/video/cai win dùng usb rufus/loi win cai lai win bang usb rufus - Storyline output/story_html5.html" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
				{
                    id: 3,
                    name: ' 1.3. Sự cố phần mềm ứng dụng',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7BJiPyN4zZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 4,
                    name: ' 1.4. Sự cố về Internet',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZotVkQDC6mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                }
            ]
        },
        
        {
            stt: 2,
            title: 'Video',
            lession: [
                {
                    id: 5,
                    name: ' * Video Tổng hợp',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="asset/video/loi may tinh - Storyline output/story_html5.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                
            ]
        },
       
       
    ],

    // Render
    render: function () {
        const lessionsHtmls = this.lessions.map(function (data,index) {
            if(data.stt) {
                var lengthItem = data.lession.length
            }
            const testdata = data.lession.map(function(item,index) {
                return `
                <div class="page__js-course-app-list-content-item ${item.active}" dataset = ${item.id}>
                   
                    <div class="page__js-course-app-list-content-item-link">
                        <span class="page__js-course-app-list-content-item-text">${item.name}</span>
                        
                    </div>
                </div>
                
                    `
                })

                return `
                <div class="">
                <div class="page__js-course-app-list-content-title">
                <span class="page__js-course-app-list-content-title-heading">Phần ${data.stt}: ${data.title}</span>
                    
                    </div>
                    ${testdata.join('')}
                    </div>
                    `
                })
                
                lessionsList.innerHTML = lessionsHtmls.join('');
                lessionsList2.innerHTML = lessionsHtmls.join('');
                
                
    },

    // Load iframe video
    loadLinkCourse: function() {
        const _this = this
        lessionsList.onclick = function(e) {
            _this.lessions.map(function(data) {
                data.lession.map(function(item) {
                    const courseNode = e.target.closest('.page__js-course-app-list-content-item')
                    const courseNodeNumber = Number(courseNode.getAttribute("dataset"))
                    if(courseNode && item.id === courseNodeNumber) {
                        if(item.iframe != '') {
                            courseVideoContent.innerHTML = item.iframe
                        }
                    }
                })
            })
        }
        
        // responsive
        lessionsList2.onclick = function(e) {
            
            _this.lessions.map(function(data) {
                data.lession.map(function(item) {
                    testscroll.scrollTop = 0
                    const courseNode = e.target.closest('.page__js-course-app-list-content-item')
                    const courseNodeNumber = Number(courseNode.getAttribute("dataset"))
                    if(courseNode && item.id === courseNodeNumber) {
                        if(item.iframe != '') {
                            courseVideoContent.innerHTML = item.iframe
                        }
                    }
                })
            })
        }
    },
    
    
    
    // Run
    start: function () {
        this.loadLinkCourse()
        this.render()
    }
}

lessionApp.start()



// comment

const inputComment = document.querySelector('.page__js-course-app-video-description-comment-input')
const handleComment = document.querySelector('.page__js-course-app-video-description-comment-handle-descript')
const exitComment = document.querySelector('.page__js-course-app-video-description-comment-cancle')
const completeComment =document.querySelector('.page__js-course-app-video-description-comment-complete')

inputComment.onfocus = function() {
    handleComment.style.display = 'flex'
}

exitComment.onclick = function() {
    handleComment.style.display = 'none';
    inputComment.value = '';
    completeComment.style.backgroundColor = ''
}

inputComment.addEventListener('input', function(e) {
    if(e.target.value != '') {
        completeComment.style.backgroundColor = 'var(--primary-color)'
    } else {
        completeComment.style.backgroundColor = ''
    }
})


// Comment

const commentList = document.querySelector('.page__js-course-app-video-comment-app-wrap')

const commentApp = {
    comments: [
       
    ],

    render: function() {
        const commnetHtmls = this.comments.map(function(data) {
            return `
            <div class="page__js-course-app-video-comment-app-item">
            <img src="${data.img}" class="page__js-course-app-video-comment-app-user-img"></img>
            <div class="page__js-course-app-video-comment-app-item-content-wrap">
            <div class="page__js-course-app-video-comment-app-item-content">
            <h3 class="page__js-course-app-video-comment-app-item-name">${data.name}</h3>
            <span class="page__js-course-app-video-comment-app-item-content-text">${data.content}</span>
            </div>
            <div class="page__js-course-app-video-comment-app-item-content-handle">
            <span class="page__js-course-app-video-comment-app-item-content-handle-text">Thích</span>
            <span class="page__js-course-app-video-comment-app-item-content-handle-text">Trả lời</span>
            <span class="page__js-course-app-video-comment-app-item-content-handle-date">2 tháng trước</span>
            <i class="fas fa-ellipsis-h"></i>
            </div>
            </div>
            </div>
            `
        })

        commentList.innerHTML = commnetHtmls.join('')


    },

    start: function() {
        this.render()
        
        // responsive
        if(window.innerWidth <= 1023) {
            paneCourse.classList.add('isopen-description');
            paneContent.classList.remove('isopen-description')
            tabCourse.classList.add('isclick');
            tabAbout.classList.remove('isclick')
        } else {
            paneCourse.classList.remove('isopen-description');
            paneContent.classList.add('isopen-description')
            tabCourse.classList.remove('isclick')
            tabAbout.classList.add('isclick')
        }
    }
    
}

commentApp.start()




// Responsive

const windowWidth = window.innerWidth

window.addEventListener('resize', function(e) {
    const heightPercent = ((e.target.innerWidth)/windowWidth * 100) - 20
    if(e.target.innerWidth <= 1023) {
        paneCourse.classList.add('isopen-description');
        paneContent.classList.remove('isopen-description')
        tabCourse.classList.add('isclick');
        tabAbout.classList.remove('isclick')
        linkVideoCourses.style.height = `${heightPercent}%`
    } else {
        paneCourse.classList.remove('isopen-description');
        paneContent.classList.add('isopen-description')
        tabCourse.classList.remove('isclick')
        tabAbout.classList.add('isclick')
    }
})
// Description



tabsDescription.forEach(function(tab, index) {
    const pane = panesDescription[index]
    // console.log(pane)
    tab.onclick = function() {
        document.querySelector('.description-tab.isclick').classList.remove('isclick')
        document.querySelector('.description-pane.isopen-description').classList.remove('isopen-description')
        
        this.classList.add('isclick')
        pane.classList.add('isopen-description')
    }
})


