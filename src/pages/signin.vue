<template>
  <div class="max-w-[40rem] mx-auto">
    <h1 class="mb-12 text-xl text-center text-text font-bold">Create your account</h1>
    <div
      class="my-8">
      <p class="mb-4">Some info before you sign in:</p>
      <ul class="list-disc">
        <li><u>Username must be longer than 3 characters and not longer than 20 characters.</u></li>
        <li><u>First name must be longer than 3 characters and not longer than 20 characters.</u></li>
        <li><u>Last name must be longer than 3 characters and not longer than 20 characters.</u></li>
        <li><u>Password must be longer than 6 characters.</u></li>
      </ul>
    </div>

    <SigninForm />
  </div>
</template>
