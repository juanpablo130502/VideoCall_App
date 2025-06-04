import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

export default function VideollamadaScreen() {
  const handleJoinCall = () => {
    const roomName = 'videollamada-demo-prueba123';
    const url = `https://meet.jit.si/${roomName}`;
    Linking.openURL(url);
  };

  return (
    <LinearGradient
      colors={['#0A0A0A', '#1A1A1A', '#2A0A0A']}
      style={styles.container}
    >
      {/* Elementos decorativos de fondo */}
      <View style={styles.backgroundDecoration}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>

      <Animatable.View animation="fadeInUp" duration={1000} style={styles.content}>
        {/* Título principal */}
        <Animatable.Text 
          animation="fadeInDown" 
          duration={1200} 
          style={styles.title}
        >
          Preparando Llamada
        </Animatable.Text>

        {/* Línea decorativa */}
        <Animatable.View 
          animation="fadeInLeft" 
          duration={800} 
          delay={300}
          style={styles.decorativeLine}
        />

        {/* Recordatorios */}
        <View style={styles.remindersContainer}>
          {/* Recordatorio 1: Cámara */}
          <Animatable.View 
            animation="fadeInLeft" 
            duration={1000} 
            delay={600}
            style={styles.reminderItem}
          >
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={['#FF0000', '#CC0000']}
                style={styles.iconGradient}
              >
                <Ionicons name="videocam" size={30} color="#FFD700" />
              </LinearGradient>
            </View>
            <Text style={styles.reminderText}>Recuerda activar tu cámara</Text>
          </Animatable.View>

          {/* Recordatorio 2: Micrófono */}
          <Animatable.View 
            animation="fadeInRight" 
            duration={1000} 
            delay={800}
            style={styles.reminderItem}
          >
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={['#FF0000', '#CC0000']}
                style={styles.iconGradient}
              >
                <Ionicons name="mic" size={30} color="#FFD700" />
              </LinearGradient>
            </View>
            <Text style={styles.reminderText}>Recuerda activar tu micrófono</Text>
          </Animatable.View>

          {/* Recordatorio 3: Diversión */}
          <Animatable.View 
            animation="fadeInLeft" 
            duration={1000} 
            delay={1000}
            style={styles.reminderItem}
          >
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={['#FF0000', '#CC0000']}
                style={styles.iconGradient}
              >
                <Ionicons name="happy" size={30} color="#FFD700" />
              </LinearGradient>
            </View>
            <Text style={styles.reminderText}>Recuerda divertirte</Text>
          </Animatable.View>
        </View>

        {/* Botón principal para unirse */}
        <Animatable.View 
          animation="fadeInUp" 
          duration={1000} 
          delay={1200}
          style={styles.buttonContainer}
        >
          <TouchableOpacity 
            style={styles.joinButton} 
            onPress={handleJoinCall}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#FF0000', '#CC0000']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonGradient}
            >
              <Ionicons name="call" size={24} color="#FFD700" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Unirse a la Videollamada</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>

        {/* Información adicional */}
        <Animatable.View 
          animation="fadeIn" 
          duration={1000} 
          delay={1400}
          style={styles.infoContainer}
        >
          <Text style={styles.infoText}>Sala: videollamada-demo-prueba123</Text>
        </Animatable.View>
      </Animatable.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundDecoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.1,
  },
  circle1: {
    width: 180,
    height: 180,
    backgroundColor: '#FF0000',
    top: 50,
    right: -40,
  },
  circle2: {
    width: 120,
    height: 120,
    backgroundColor: '#FFD700',
    bottom: 150,
    left: -20,
  },
  circle3: {
    width: 80,
    height: 80,
    backgroundColor: '#FF0000',
    top: height * 0.7,
    right: 60,
  },
  content: {
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.2)',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'monospace',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  decorativeLine: {
    width: 100,
    height: 2,
    backgroundColor: '#FFD700',
    marginBottom: 40,
    borderRadius: 1,
  },
  remindersContainer: {
    width: '100%',
    marginBottom: 40,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  iconContainer: {
    marginRight: 20,
  },
  iconGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  reminderText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'monospace',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 25,
  },
  joinButton: {
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 1,
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});