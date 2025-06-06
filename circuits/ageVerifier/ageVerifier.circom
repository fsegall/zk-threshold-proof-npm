pragma circom 2.0.0;

template AgeVerifier() {
    signal input birthDate;
    signal input minAge;
    signal input currentDate;

    signal ageInSeconds;
    signal minAgeInSeconds;

    minAgeInSeconds <== minAge * 31557600;
    ageInSeconds <== currentDate - birthDate;

    // Implementa o comparador direto via constraint (safe for small circuits)
    signal diff;
    diff <== ageInSeconds - minAgeInSeconds;

    // Verifica se diff >= 0 (se for negativo, isOldEnough = 0)
    signal isNegative;
    isNegative <-- diff < 0;

    signal output isOldEnough;
    isOldEnough <== 1 - isNegative;
}

component main = AgeVerifier();


