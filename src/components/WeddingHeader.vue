<template>
  <h1 class="neonText">Nhi & Matthew</h1>
</template>
<style scoped>
.neonText {
  color: #ffffef;
  font-size: 2.25rem;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgb(218, 197, 212), 0 0 10px #cd65ac, 0 0 15px #cd65ac,
    0 0 20px #cd65ac, 0 0 40px #e553b4, 0 0 50px #c52e95, 0 0 10px #e553b4,
    0 0 70px #c52e95ad;
  user-select: none;
  font-family: WildBlood;
}

.neonText:hover {
  animation: blink 11s infinite;
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #555;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    color: #ffffef;
    text-shadow: 0 0 5px rgb(218, 197, 212), 0 0 10px #cd65ac, 0 0 15px #cd65ac,
      0 0 20px #cd65ac, 0 0 40px #e553b4, 0 0 50px #c52e95, 0 0 10px #e553b4,
      0 0 70px #c52e95ad;
  }
}
</style>
