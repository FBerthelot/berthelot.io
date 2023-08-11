<i18n>
  {
    "fr": {
      "subtitle": "💡 Vous pouvez cliquer sur les évènements pour plus de détails.",
      "ok": "ok",
      "Sam": "Sam",
      "Dim": "Dim",
      "19": "19",
      "20": "20",
      "separator": "-",
      "0:00": "0:00",
      "1:00": "1:00",
      "2:00": "2:00",
      "3:00": "3:00",
      "4:00": "4:00",
      "5:00": "5:00",
      "6:00": "6:00",
      "7:00": "7:00",
      "8:00": "8:00",
      "9:00": "9:00",
      "10:00": "10:00",
      "11:00": "11:00",
      "12:00": "12:00",
      "13:00": "13:00",
      "14:00": "14:00",
      "15:00": "15:00",
      "16:00": "16:00",
      "17:00": "17:00",
      "18:00": "18:00",
      "19:00": "19:00",
      "20:00": "20:00",
      "21:00": "21:00",
      "22:00": "22:00",
      "23:00": "23:00",
      "24:00": "24:00"
    },
    "en": {
      "subtitle": "💡 You can click on event for mor details.",
      "ok": "ok",
      "Sam": "Sat",
      "Dim": "Sun",
      "19": "19",
      "20": "20",
      "separator": "-",
      "0:00": "0:00",
      "1:00": "1:00",
      "2:00": "2:00",
      "3:00": "3:00",
      "4:00": "4:00",
      "5:00": "5:00",
      "6:00": "6:00",
      "7:00": "7:00",
      "8:00": "8:00",
      "9:00": "9:00",
      "10:00": "10:00",
      "11:00": "11:00",
      "12:00": "12:00",
      "13:00": "13:00",
      "14:00": "14:00",
      "15:00": "15:00",
      "16:00": "16:00",
      "17:00": "17:00",
      "18:00": "18:00",
      "19:00": "19:00",
      "20:00": "20:00",
      "21:00": "21:00",
      "22:00": "22:00",
      "23:00": "23:00",
      "24:00": "24:00"
    }
  }
</i18n>

<template>
  <section class="schedule">
    <h2 class="typography-title-2">{{ title }}</h2>
    <p class="typography-paragraph">{{ $t('subtitle') }}</p>
    <div class="calendar">
      <div
        id="timeMarker"
        class="current-time-marker"
        :style="{
          top: `calc( var(--timeHeight) * ${
            currentDate.getHours() + currentDate.getMinutes() / 60
          } +  var(--timeHeight))`,
        }"
      ></div>
      <div class="timeline">
        <div class="spacer"></div>
        <div class="time-marker">{{ $t('0:00') }}</div>
        <div class="time-marker">{{ $t('1:00') }}</div>
        <div class="time-marker">{{ $t('2:00') }}</div>
        <div class="time-marker">{{ $t('3:00') }}</div>
        <div class="time-marker">{{ $t('4:00') }}</div>
        <div class="time-marker">{{ $t('5:00') }}</div>
        <div class="time-marker">{{ $t('6:00') }}</div>
        <div class="time-marker">{{ $t('7:00') }}</div>
        <div class="time-marker">{{ $t('8:00') }}</div>
        <div class="time-marker">{{ $t('9:00') }}</div>
        <div class="time-marker">{{ $t('10:00') }}</div>
        <div class="time-marker">{{ $t('11:00') }}</div>
        <div class="time-marker">{{ $t('12:00') }}</div>
        <div class="time-marker">{{ $t('13:00') }}</div>
        <div class="time-marker">{{ $t('14:00') }}</div>
        <div class="time-marker">{{ $t('15:00') }}</div>
        <div class="time-marker">{{ $t('16:00') }}</div>
        <div class="time-marker">{{ $t('17:00') }}</div>
        <div class="time-marker">{{ $t('18:00') }}</div>
        <div class="time-marker">{{ $t('19:00') }}</div>
        <div class="time-marker">{{ $t('20:00') }}</div>
        <div class="time-marker">{{ $t('21:00') }}</div>
        <div class="time-marker">{{ $t('22:00') }}</div>
        <div class="time-marker">{{ $t('23:00') }}</div>
      </div>
      <div class="days">
        <div class="day mon">
          <div class="date">
            <p class="date-num">{{ $t('19') }}</p>
            <p class="date-day">{{ $t('Sam') }}</p>
          </div>
          <div class="events">
            <button
              v-for="(event, index) in schedule.filter(
                (event) => event.startDate < new Date('2023/08/20 00:00')
              )"
              :key="event.title + index"
              :style="{
                'grid-row-start':
                  event.startDate.getHours() * 4 +
                  (event.startDate.getMinutes() / 60) * 4 +
                  1,
                'grid-row-end':
                  event.endDate >= new Date('2023/08/20 00:00')
                    ? 25 * 4
                    : event.endDate.getHours() * 4 +
                      (event.endDate.getMinutes() / 60) * 4 +
                      1,
              }"
              :class="{
                event: true,
                active:
                  event.startDate < currentDate && event.endDate > currentDate,
                finished: event.endDate < currentDate,
              }"
              :title="event.title"
              @click="showEventInDetails(event)"
            >
              <p class="title">{{ event.title }}</p>
              <address>
                {{ event.location.name }}
              </address>
              <time class="time">
                {{
                  event.startDate.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
                {{ $t('separator') }}
                {{
                  event.endDate.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
              </time>
            </button>
          </div>
        </div>
        <div class="day tues">
          <div class="date">
            <p class="date-num">{{ $t('20') }}</p>
            <p class="date-day">{{ $t('Dim') }}</p>
          </div>
          <div class="events">
            <button
              v-for="(event, index) in schedule.filter(
                (event) => event.endDate >= new Date('2023/08/20 00:00')
              )"
              :key="event.title + index"
              :style="{
                'grid-row-start':
                  event.startDate < new Date('2023/08/20 00:00')
                    ? 1
                    : event.startDate.getHours() * 4 +
                      (event.startDate.getMinutes() / 60) * 4 +
                      1,
                'grid-row-end':
                  event.endDate.getHours() * 4 +
                  (event.endDate.getMinutes() / 60) * 4 +
                  1,
              }"
              class="event"
              :title="event.title"
              @click="showEventInDetails(event)"
            >
              <p class="title">{{ event.title }}</p>
              <address>
                {{ event.location.name }}
              </address>
              <time class="time">
                {{
                  event.startDate.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
                {{ $t('separator') }}
                {{
                  event.endDate.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
              </time>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="eventToShowInDetail" class="modal">
      <div class="modal-content">
        <h3 class="typography-title-2">{{ eventToShowInDetail.title }}</h3>
        <time class="typography-paragraph time">
          {{
            eventToShowInDetail.startDate.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            })
          }}
          {{ $t('separator') }}
          {{
            eventToShowInDetail.endDate.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            })
          }}
        </time>
        <address class="typography-paragraph">
          {{ eventToShowInDetail.location.name }} <br />
          {{ eventToShowInDetail.location.address }}
        </address>

        <!--eslint-disable-next-line vue/no-v-html -->
        <p class="typography-paragraph" v-html="eventToShowInDetail.detail"></p>
        <button class="button" @click="closeEventModal">{{ $t('ok') }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    schedule: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentDate: new Date(),
      timerInterval: null,

      eventToShowInDetail: null,
    }
  },
  beforeDestroy() {
    clearInterval(this.timerInterval)
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    showEventInDetails(event) {
      this.eventToShowInDetail = event
    },
    closeEventModal() {
      this.eventToShowInDetail = null
    },
    startTimer() {
      const now = new Date()
      if (now < new Date('2023/08/19 1:00:00')) {
        if (now.getHours() >= 0 && now.getHours() < 10) {
          now.setFullYear(2023, 7, 20)
        } else {
          this.currentDate.setFullYear(2023, 7, 19)
        }
      }
      this.currentDate = now

      this.timerInterval = setInterval(() => {
        const now = new Date()
        if (now < new Date('2023/08/19 1:00:00')) {
          if (now.getHours() >= 0 && now.getHours() < 10) {
            now.setFullYear(2023, 7, 20)
          } else {
            now.setFullYear(2023, 7, 19)
          }
        }
        this.currentDate = now
      }, 1000)
    },
  },
}
</script>

<style>
:root {
  --numDays: 2;
  --numHours: 24;
  --timeHeight: 80px;
  --calBgColor: #eaeaea;
  --eventBorderColor: grey;
}
</style>

<style scoped>
.schedule {
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
}

.calendar {
  display: grid;
  gap: 10px;
  grid-template-columns: auto 1fr;
  margin: 2rem;
  position: relative;
}

.current-time-marker {
  position: absolute;
  width: 100%;
  border: 1px dashed grey;
}

.timeline {
  display: grid;
  grid-template-rows: repeat(var(--numHours), var(--timeHeight));
}

.days {
  display: grid;
  grid-column: 2;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.events {
  display: grid;
  grid-template-rows: repeat(
    calc(var(--numHours) * 4),
    calc(var(--timeHeight) / 4)
  );
  border-radius: 5px;
  background: var(--calBgColor);
}

.event {
  border: 1px solid var(--eventBorderColor);
  border-radius: 5px;
  padding: 2px;
  margin: 0 0.5rem;
  background: white;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.event .title {
  font-size: 0.9rem;
  font-weight: bold;
}

.event address,
.event time {
  font-style: italic;
  font-size: 0.75rem;
}

.event.active {
  background: #ff846e;
}

.event.finished {
  background: #be91c6;
}

.space,
.date {
  height: 60px;
}

.date {
  display: flex;
  gap: 1em;
}

.date-num {
  font-size: 3rem;
  font-weight: 600;
  display: inline;
}

.date-day {
  display: inline;
  font-size: 3rem;
  font-weight: 100;
}

@media (max-width: 500px) {
  .calendar {
    margin: 0.25rem;
  }
}

/** Modal */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
}

.modal-content {
  background-color: var(--color-background-light);
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-content button {
  margin-top: 3rem;
  width: 5rem;
}
</style>
