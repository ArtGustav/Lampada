import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [isLigada, setIsLigada] = useState(false);
  const [cliques, setCliques] = useState(0); // Estado para contar os cliques

  // Reage à mudança de estado de forma limpa
  useEffect(() => {
    console.log(isLigada ? "💡 LIGADA" : "🔌 DESLIGADA");
  }, [isLigada]);

  // Função para alternar a lâmpada e somar +1 no contador
  const alternarLampada = () => {
    setIsLigada(!isLigada);
    setCliques(cliques + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lampadaIcon}>{isLigada ? '💡' : '🔌'}</Text>

      {/* Exibindo o contador na tela */}
      <Text style={styles.counterText}>
        Total de cliques: {cliques}
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isLigada ? '#e74c3c' : '#2ecc71' }]}
        onPress={alternarLampada}
      >
        <Text style={styles.buttonText}>
          {isLigada ? 'Desligar' : 'Ligar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  lampadaIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  counterText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    fontWeight: '600',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});