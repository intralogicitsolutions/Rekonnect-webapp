import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  values1: string[];
  testimonialArray: any = [];
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.getTestimonialArrayData();
    $(document).ready(function () {
      $("#carousel").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
          0: {
            items: 1
          },

          600: {
            items: 1
          },

          1024: {
            items: 1
          },

          1366: {
            items: 1
          }
        }
      });
    })
  }
  getTestimonialArrayData() {
    const json = {};
    const dataArray = [{
      candidate_name: 'Suraj Warthy',
      review: 'Hi inventiway, it\'s been really great experience with team and Hr as they guided and provided me opportunity which was I am looking for it.Doing well in Current co.Thanks to team and Hr for this placements.',
      profile: '../../assets/images/Suraj_Warthy.jpg'
    },
    {
      candidate_name: 'Yogesh Chougule',
      review: 'My name is Yogesh Chougule ,it has been almost more than 2 months. I am working with the qfix team more than any family to me.Honestly I am learning ,experiencing a couple of big things , developing my potential throughout my journey every day, the team is fabulous and I am too blessed to have this team in my professional path ,who can make you rise whenever you feel low or something if you don\'t know . We help each other to come out with the absolute best in each other .',
      profile: '../../assets/images/Yogesh_Chougule.jpg'
    },
    {
      candidate_name: 'Akshay Shinde',
      review: 'Interview process for Qfix infocomm pvt. Ltd arranged by inventiway was very nice,  I got immediate from inventiway to my CV and as you already told me the JD and companies requirements in details already so it was easy for me present myself to interviewer overall great experience with interview process.',
      profile: '../../assets/images/Akshay_shinde.jpeg'
    },
    {
      candidate_name: 'Nageshwar Tailor',
      review: 'I am very grateful for the Software Programmer  Job opportunity at Qfix Infocomm. The entire journey was awesome and full of learning. Apart from that, I learn lots of new stuff regarding Developers.  I would also like to thank Vasudha Majumdar and Inventiway Solution for this opportunity.',
      profile: '../../assets/images/Nageshwar_Tailor.jpg'
    },
    {
      candidate_name: 'Rinkal Nimbalkar',
      review: 'I am learning a lot from the company and I am really enjoying my work and exploring myself together.',
      profile: '../../assets/images/Rinkal_Nimbalkar.jpg'
    }
    ];
    this.testimonialArray = dataArray;
  }
  changeImage(event){
    console.log(event.page)
  }
}
