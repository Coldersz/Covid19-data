<template>
  <div class="mx-auto m-6 bg-indigo-100 rounded-lg lg:max-w-5xl">
      <div class="content hidden sm:block mx-auto">
        <p>
          <center>
            <div class="px-5">
              <div class="py-5">
                <b-skeleton width="70%" active></b-skeleton>
              </div>
              <div class="pb-5 grid grid-cols-3 gap-3">
                <div class="w-full rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-6 px-4">
                    <b-skeleton></b-skeleton>
                    <b-skeleton width="50%"></b-skeleton>
                    <b-skeleton></b-skeleton>
                  </div>
                </div>
                <div class="w-full rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-6 px-4">
                    <b-skeleton></b-skeleton>
                    <b-skeleton width="50%"></b-skeleton>
                    <b-skeleton></b-skeleton>
                  </div>
                </div>
                <div class="w-full rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-6 px-4">
                    <b-skeleton></b-skeleton>
                    <b-skeleton width="50%"></b-skeleton>
                    <b-skeleton></b-skeleton>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </p>
      </div>
    </div>
</template>