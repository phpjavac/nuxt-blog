<template lang="pug">
  v-container(pt-5 mt-5)
    v-layout(justify-center wrap)
        // My card
        v-flex(md8 xs11 wrap)
          v-card.my-card.pb-5
            // My Avatar
            v-flex(class="text-xs-center" pb-4 wrap)
              img(
                id="my-avatar"
                src="https://q4.qlogo.cn/g?b=qq&nk=1060854705@qq.com&s=3?d=retro"
              )

            // My Info
            v-layout.my-info(wrap)
              v-flex(md10 xs11 wrap)
                // Profile
                v-flex(tag="section")
                  v-flex(class="title font-weight-bold" wrap)
                    | 绎紫洛英

                  v-flex(class="subheading" mt-3 wrap)
                    | yiziluoying@gmail.com

                // Experiences
                v-flex.info-exp(tag="section")
                  // Title
                  v-flex.section-title(wrap)
                    v-icon
                      | fas fa-briefcase
                    | 工作经验

                  // Contents
                  v-timeline.my-3(:dense="$device.isMobile")
                    v-timeline-item(
                      v-for="(exp, index) in experiences"
                      :key="index"
                      color="accent"
                      small
                    )
                      v-card.exp-card(
                        :data-aos="$device.isMobile ? 'fade-up' : exp.aos"
                      )
                        v-card-title
                          v-flex(tag="span" class="body-2 accent-text")
                            | {{ exp.date }}

                        v-card-text(class="py-0")
                          v-flex(tag="span" class="title d-block")
                            v-icon(class="mr-2 mb-2" color="primary lighten-1")
                              | {{ exp.icon }}
                            | {{ exp.title }}

                          v-flex(tag="span" class="caption secondary-text d-block")
                            | {{ exp.position }}

                        v-card-text(class="text-xs-left px-4")
                          | {{ exp.desc }}

                // Skills
                v-flex(
                  tag="section"
                  class="info-skill"
                  data-aos="zoom-in"
                )
                  // Title
                  v-flex.section-title(wrap)
                    v-icon
                      | fas fa-wrench
                    | 技能

                  // Content
                  v-layout.skill-list(wrap)
                    v-flex(
                      v-for="(skill, index) in skills"
                      :key="index"
                      class="skill"
                      md6
                      xs12
                      wrap
                    )
                      | {{ skill.name }}

                      v-progress-linear(
                        :value="skill.percentage"
                        class="my-1"
                        height="4"
                        color="accent"
                      )
</template>


<script>
export default {
  data() {
    return {
      skills: [
        { name: "Vue", percentage: "80" },
        { name: "HTML & CSS", percentage: "80" },
        { name: "JavaScript", percentage: "82" },
        { name: "SQL", percentage: "60" },
        { name: "PHP", percentage: "50" },
        { name: "Coding Style", percentage: "80" }
      ],
      experiences: [
        {
          aos: "fade-right",
          date: "2017 - 2019",
          icon: "fab fa-vuejs",
          title: "前端开发",
          position: "Developer",
          desc: "转型负责前端桌面和移动端应用开发。主要项目类型：在线考试类、公共管理实训类开发。相关技术：JavaScript、angular、Vue等"
        },
        {
          aos: "fade-left",
          date: "2016 - 2017",
          icon: "fab fa-php",
          title: "PHP",
          position: "Developer",
          desc: "主要负责各类企业级后台管理系统的开发工作，同时也涉及了少量黑盒测试以及相关测试用例的编写。相关技术：PHP、MYSQL、Yii、HTML&CSS、JavaScript等。"
        }
      ]
    };
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.my-card
  #my-avatar
    border-radius 50%
    margin-top -75px
    width 150px
    height 150px
  .info-exp, .info-skill
    margin-top 30px
    .section-title
      font-size 24px
      font-weight 700
      padding-bottom 16px
      .v-icon
        color var(--v-primary-base)
        margin 0 8px 4px 0
  .my-info
    text-align center
    justify-content center
    .info-exp .exp-card
      border-top 4px solid var(--v-accent-base)
    .info-skill .skill-list .skill
      padding 4px
</style>
