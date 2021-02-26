<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <section class="timeline">
           <hr class="styleShadow">
          <div v-if="hasProfessionalExperienceItems" class="wrapper-timeline">
            <h3>Professional experience</h3>
          <hr class="styleShadow">

            <div
              v-for="(timelineContent, timelineIndex) in dataTimelineProfessionalExperience"
              :key="timelineIndex"
              :class="wrapperItemClass(timelineIndex)"
            >
              <div class="section-year">
                <p v-if="hasYear(timelineContent)" class="year">
                  {{ getYear(timelineContent) }}
                </p>
              </div>
              <ProfessionalExperienceItem
                :item-timeline="timelineContent"
                :date-locale="dateLocale"
                :color-dots="colorDots"
              />
            </div>
          </div>
          <hr class="styleShadow">
          <div v-if="hasProfessionalExperienceItems" class="wrapper-timeline">
              <h3 id="edu">Education</h3>
          <hr class="styleShadow">
            <div
              v-for="(timelineContent, timelineIndex) in dataTimelineProfessionalExperience"
              :key="timelineIndex"
              :class="wrapperItemClass(timelineIndex)"
            >
              <div class="section-year">
                <p v-if="hasYear(timelineContent)" class="year">
                  {{ getYear(timelineContent) }}
                </p>
              </div>
              <EducationItem 
                :item-timeline="timelineContent"
                :date-locale="dateLocale"
                :color-dots="colorDots"
              />
            </div>
          </div>
          <p v-else>{{ messageWhenNoItems }}</p>
        </section>
      </div>

      <div class="col-lg-3 mt-3">
        <AboutMeCard/>
      </div>
    </div>
  </div>
</template>

<script>
import ProfessionalExperienceItem from "./resume/ProfessionalExperienceItem.vue";
import EducationItem from "./resume/EducationItem.vue";
import AboutMeCard from "./resume/AboutMeCard.vue";
import "../store";

export default {
  name: "resume",
  components: {
    ProfessionalExperienceItem,
    EducationItem,
    AboutMeCard,
  },

  data() {
    return {
      msg: "Resumé",
      uniqueYear: "true",
      // show-day-and-month="true"
      order: "desc",
      colorDots: {
        type: String,
        default: "#2da1bf",
      },
      uniqueTimeline: {
        type: Boolean,
        default: false,
      },
      // uniqueYear: {
      //   type: Boolean,
      //   default: false
      // },
      // order: {
      //   type: String,
      //   default: ''
      // },
      dateLocale: {
        type: String,
        default: "",
      },
      timelineItems: this.$t("resume_entries"),
      messageWhenNoItems: "No articles found.",
    };
  },

  computed: {
    hasProfessionalExperienceItems() {
      return !!this.timelineItems.length;
    },
    dataTimelineProfessionalExperience() {
      if (this.order === "desc")
        return this.orderItems(this.timelineItems, "desc");
      if (this.order === "asc")
        return this.orderItems(this.timelineItems, "asc");
      return this.timelineItems;
    },
  },
  methods: {
    wrapperItemClass(timelineIndex) {
      const isSameYearPreviousAndCurrent = this.checkYearTimelineItem(
        timelineIndex
      );
      const isUniqueYear =
        this.uniqueYear &&
        isSameYearPreviousAndCurrent &&
        this.order !== undefined;
      return {
        "wrapper-item": true,
        "unique-timeline": this.uniqueTimeline || isUniqueYear,
      };
    },
    checkYearTimelineItem(timelineIndex) {
      const previousItem = this.dataTimelineProfessionalExperience[timelineIndex - 1];
      const nextItem = this.dataTimelineProfessionalExperience[timelineIndex + 1];
      const currentItem = this.dataTimelineProfessionalExperience[timelineIndex];
      if (!previousItem || !nextItem) {
        return false;
      }
      const fullPreviousYear = this.getYear(previousItem);
      const fullNextYear = this.getYear(nextItem);
      const fullCurrentYear = this.getYear(currentItem);
      return (
        (fullPreviousYear === fullCurrentYear &&
          fullCurrentYear === fullNextYear) ||
        fullCurrentYear === fullNextYear
      );
    },
    getYear(date) {
      return new Date(date.from).getFullYear();
    },
    hasYear(dataTimeline) {
      if (dataTimeline.from != null) {
        return (
          new Date(dataTimeline.from) &&
          new Date(dataTimeline.from) !== undefined
        );
      } else return false;
    },
    getTimelineItemsAssembled(items) {
      const itemsGroupByYear = [];
      items.forEach((item) => {
        const fullTime = new Date(item.from).getTime();
        if (itemsGroupByYear[fullTime]) {
          return itemsGroupByYear[fullTime].push(item);
        }
        itemsGroupByYear[fullTime] = [item];
      });
      return itemsGroupByYear;
    },
    orderItems(items, typeOrder) {
      const itemsGrouped = this.getTimelineItemsAssembled(items);
      const keysItemsGrouped = Object.keys(itemsGrouped);
      const timeItemsOrdered = keysItemsGrouped.sort((a, b) => {
        if (typeOrder === "desc") {
          return b - a;
        }
        return a - b;
      });
      const mappedItems = timeItemsOrdered.map(
        (timeItem) => itemsGrouped[timeItem]
      );
      return [].concat.apply([], mappedItems);
    },
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  text-align: left;
  width: 100%;
  // max-width: 500px; //uncomment if another col is to be added on the right maybe
  .wrapper-timeline {
    position: relative;
  }
  .wrapper-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    margin-bottom: 20px;
    .section-year {
      display: flex;
      flex-direction: column;
      // justify-content: space-between; // for aligning the year on the top
      justify-content: center; // for centering the year
      align-items: flex-end;
      padding: 15px;
      font-weight: bold;
      font-size: 18px;
      .year {
        margin: 0;
      }
    }
    &.unique-timeline {
      margin-bottom: 0;
    }
  }
}
hr.styleShadow {
	height: 5px;
	border: 0;
	box-shadow: 0px 0px 20px rgba(0,0,0,.5)
}

.box-shadow {box-shadow: 0px 0px 10px rgba(0,0,0,.5)}

.drop-shadow {
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
    }
</style>
