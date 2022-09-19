<template>
  <div>
    <div class="container w-50 mx-auto mt-10 rounded-2xl p-5 shadow-lg border">
      <div class="container mx-auto">
        <div class="">
          <div class="text-center">
            <p class="text-center font-bold text-2xl tez-purple">TezJs with DayJs</p>
          </div>
        </div>
      </div>
      <hr class="my-5 mx-10" />
      <div class="row">
        <div class="grid grid-cols-2">
          <div class="col-start-2">
            <div class="text-center">
              <span class="font-semibold text-xl underline underline-offset-4 text-blue-900"># Date and Time formats by <strong>Dayjs</strong></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="grid md:grid-cols-2">
          <div class="col-span-1">
            <div class="row flex justify-center">
              <div class="grid grid-col-3 text-center">
                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-400 w-48 text-white font-bold bg-blue-300 px-2 py-1" @click="format()">Format</button>
                </div>
                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-500 w-48 text-white font-bold bg-blue-400 px-2 py-1" @click="dayjsLocalPt()">
                    Local Time
                  </button>
                </div>

                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-700 w-48 text-white font-bold bg-blue-600 px-2 py-1" @click="daysInCurrentMonth()">
                    Days In Current Month
                  </button>
                </div>

                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-800 w-48 text-white font-bold bg-blue-700 px-2 py-1" @click="getDate()">
                    Get today's Date
                  </button>
                </div>
                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-800 w-48 text-white font-bold bg-blue-700 px-2 py-1" @click="currentMinute()">
                    Current Minute
                  </button>
                </div>

                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-900 w-48 text-white font-bold bg-blue-800 px-2 py-1" @click="lastWeek()">Last week</button>
                </div>
                <div class="col-span-1 my-2">
                  <button class="rounded-xl hover:bg-blue-800 w-48 text-white font-bold bg-blue-900 px-2 py-1" @click="ddmmyyyy()">dd-mm-yyyy</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 flex items-center justify-center">
            <div class="row">
              <div class="grid grid-cols-3">
                <div class="col-span-3 text-center">
                  <span class="text-gray-500 text-3xl font-bold">
                    {{ dateTime }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layoutName: "default",

  data() {
    return {
      dateTime: "00:00:00",
    };
  },
  methods: {
    format() {
      this.dateTime = this.$dayjs().locale(this.$localeDe).format();
    },
    dayjsLocalPt() {
      this.dateTime = this.$dayjs(this.$dayjs().locale(this.$localeDe), { locale: "pt" });
    },
    timeFromNow() {
      this.dateTime = "Year difference from 1999-01-01 till current year = " + this.$dayjs("1999-01-01").fromNow();
    },
    difference() {
      const date1 = this.$dayjs().locale(this.$localeDe);
      const date2 = this.$dayjs("2019-01-25");
      this.dateTime = "Month difference from 2019-01-25 till today = " + date1.diff(date2, "month");
    },
    daysInCurrentMonth() {
      this.dateTime = this.$dayjs(this.$dayjs().locale(this.$localeDe)).daysInMonth() + " Days in current month";
    },
    getDate() {
      this.dateTime = this.$dayjs().get("date");
    },
    currentMinute() {
      this.dateTime = this.$dayjs().minute();
    },
    lastWeek() {
      this.dateTime = this.$dayjs().calendar(this.$dayjs("2022-09-22"), { sameDay: "[Today at] h:mm A" });
    },
    ddmmyyyy() {
      this.dateTime = this.$dayjs().calendar(this.$dayjs("2019-09-21"), {
        sameDay: "[Today at] h:mm A", // The same day ( Today at 2:30 AM )
        nextDay: "[Tomorrow]", // The next day ( Tomorrow at 2:30 AM )
        nextWeek: "dddd", // The next week ( Sunday at 2:30 AM )
        lastDay: "[Yesterday]", // The day before ( Yesterday at 2:30 AM )
        lastWeek: "[Last] dddd", // Last week ( Last Monday at 2:30 AM )
        sameElse: "DD/MM/YYYY", // Everything else ( 7/10/2011 )
      });
    },
  },
};
</script>

<style scoped>
.w-50 {
  width: 50%;
}
.btnWidth {
  width: 200px;
}
.hoverWidth {
  width: 250px;
}
.tez-purple {
  color: rgb(79, 70, 229);
}
</style>
