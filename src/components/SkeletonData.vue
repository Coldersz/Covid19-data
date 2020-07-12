<template>
  <div class="mx-auto m-6 bg-indigo-100 rounded-lg lg:max-w-5xl">
      <div class="content hidden sm:block mx-auto">
        <p>
          <center>
            <div class="px-5">
              <div class="py-10">
                <b-skeleton width="70%" active></b-skeleton>
              </div>
              <div class="pb-5 grid grid-cols-3 gap-3">
                <div class="w-full rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-5 px-4">
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                    <div class="py-2"><b-skeleton width="50%"></b-skeleton></div>
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                  </div>
                </div>
                <div class="w-full rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-5 px-4">
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                    <div class="py-2"><b-skeleton width="50%"></b-skeleton></div>
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                  </div>
                </div>
                <div class="w-full rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-5 px-4">
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                    <div class="py-2"><b-skeleton width="50%"></b-skeleton></div>
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </p>
      </div>
      <div class="content sm:hidden mx-auto">
        <p>
          <center>
            <div class="px-5">
              <div class="py-10">
                <div class="py-3">
                  <b-skeleton width="90%" active></b-skeleton>
                </div>
                <div class="py-3">
                  <b-skeleton width="60%" active></b-skeleton>
                </div>
                <div class="py-3">
                  <b-skeleton width="80%" active></b-skeleton>
                </div>
              </div>
              <div class="pb-5 block">
                <div class="w-full my-5 rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-5 px-4">
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                    <div class="py-2"><b-skeleton width="50%"></b-skeleton></div>
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                  </div>
                </div>
                <div class="w-full my-5 rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-5 px-4">
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                    <div class="py-2"><b-skeleton width="50%"></b-skeleton></div>
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                  </div>
                </div>
                <div class="w-full my-5 rounded-md mx-auto shadow-lg bg-white">
                  <div class="py-5 px-4">
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                    <div class="py-2"><b-skeleton width="50%"></b-skeleton></div>
                    <div class="py-2"><b-skeleton></b-skeleton></div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </p>
      </div>
    </div>
</template>