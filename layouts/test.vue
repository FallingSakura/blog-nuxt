<template>
  <div>
    <header>
      <nav-bar></nav-bar>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <nav-button title="Back to HOME" url="/"></nav-button>
    </footer>
  </div>
</template>