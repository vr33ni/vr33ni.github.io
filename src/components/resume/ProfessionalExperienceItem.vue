<template>
  <section class="timeline-item">
    <div class="item">
      <span :style="getBackgroundColour(itemTimeline.color)" class="dot" />
      <div class="row">
        <div class="col-md-2" style="align-items: center;display: flex;"> <!-- maybe use media query to hide the month/date for small screens -->
  <h3 class="date-item">{{ getFormattedDate(itemTimeline) }}</h3>
        </div>
         <div class="col-md-10">
  <div class="bubble box-shadow">
        <h4 class="title-item" v-html="itemTimeline.title" />
        <h5 class="title-item sub-title-item" v-html="itemTimeline.role" />
        <p class="description-item" v-html="itemTimeline.description" />
        <ul v-if="hasAssignments">
          <li v-html="itemTimeline.assignments.assignment1.title + ': ' + itemTimeline.assignments.assignment1.location + ' (' + 
          itemTimeline.assignments.assignment1.duration + ')'">
          <li v-html="itemTimeline.assignments.assignment2.title + ': ' + itemTimeline.assignments.assignment2.location + ' (' + 
          itemTimeline.assignments.assignment2.duration + ')'">
          
          </li>
        </ul>
      </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfessionalExperienceItem",
  props: {
    itemTimeline: {
      type: Object,
      default: () => {},
    },
    colorDots: {
      type: String,
      default: "#2da1bf",
    },
    dateLocale: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasAssignments() {
      if (this.itemTimeline.assignments != null) {
        return true
      } else {
        return false;
      }
    }
  },
  methods: {
    getBackgroundColour(color) {
      // console.log("color dots", this.colorDots, color);
      return color ? `background:${color}` : `background:${this.colorDots}`;
    },
    getFormattedDate(item) {
      const locale = this.dateLocale || window.navigator.language;
      const nameMonth = new Date(item.from).toLocaleDateString(locale, {
        month: "long",
      });
      if (item.showDayAndMonth) {
        const day = new Date(item.from).getDate();
        return `${day}. ${nameMonth}`;
      }

      return nameMonth;
    },
  },
};
</script>

<style lang="scss" scoped>
.center-item {
   align-items: center !important; // for centering the month/date
   display: flex !important; // for centering the month/date
}
.timeline-item {
  .item {
    border-left: 5px solid #ccd5db;
    border-radius: 6px;
    padding: 20px 0 20px 15px;
    position: relative;
    align-items: center !important; // for centering the month/date
    display: flex !important; // for centering the month/date
  }

.bubble {
    position: relative;
    background: white;
    border: 1px solid #9fa7b3;
    max-width: 90%;
    padding: 10px;
    font-family: arial;
    margin: 0 auto;
    font-size: 14px;
    border-radius: 6px;
  }
     .bubble:after,
    .bubble:before {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

  .bubble:after {
      border-color: rgba(255, 255, 204, 0);
      border-right-color: white;
      border-width: 15px;
      margin-top: -15px;
    }
    .bubble:before {
      border-color: rgba(255, 204, 0, 0);
      border-right-color: #9fa7b3;
      border-width: 16px;
      margin-top: -16px;
    }

  
  
  .drop-shadow {
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
  }

  .box-shadow {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .date-item {
    margin: 0;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
  }
  .title-item {
    margin: 0;
    padding: 5px 0;
    font-size: 15px;
    font-weight: 500;
  }
    .sub-title-item {
    font-style: italic;
     font-size: 14px;
  }
  .description-item {
    font-weight: 100;
    margin: 0;
  }
  .dot {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: -10px;
    // top: 26px; // remove this for aligning the dot in the middle
  }
}
</style>
