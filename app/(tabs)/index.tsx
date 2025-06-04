import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
        {/* Icono principal con glow effect */}
        <Animatable.View 
          animation="pulse" 
          iterationCount="infinite"
          iterationDelay={2000}
          style={styles.iconContainer}
        >
          <LinearGradient
            colors={['#FF0000', '#CC0000', '#990000']}
            style={styles.iconGradient}
          >
            <Ionicons name="videocam" size={50} color="#FFD700" />
          </LinearGradient>
        </Animatable.View>

        {/* Título principal */}
        <Animatable.Text 
          animation="fadeInDown" 
          duration={1200} 
          delay={300}
          style={styles.title}
        >
          VideoCall
        </Animatable.Text>

        {/* Subtítulo */}
        <Animatable.Text 
          animation="fadeInUp" 
          duration={1000} 
          delay={600}
          style={styles.subtitle}
        >
          Conecta al instante
        </Animatable.Text>

        {/* Línea decorativa */}
        <Animatable.View 
          animation="fadeInLeft" 
          duration={800} 
          delay={900}
          style={styles.decorativeLine}
        />

        {/* Botón principal */}
        <Link href="/videollamada" asChild>
          <Animatable.View 
            animation="fadeInUp" 
            duration={1000} 
            delay={1200}
            style={styles.buttonContainer}
          >
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <LinearGradient
                colors={['#FF0000', '#CC0000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Ionicons name="play" size={24} color="#FFD700" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Iniciar Llamada</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animatable.View>
        </Link>

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
    width: 200,
    height: 200,
    backgroundColor: '#FF0000',
    top: -50,
    right: -50,
  },
  circle2: {
    width: 150,
    height: 150,
    backgroundColor: '#FFD700',
    bottom: 100,
    left: -30,
  },
  circle3: {
    width: 100,
    height: 100,
    backgroundColor: '#FF0000',
    top: height * 0.6,
    right: 50,
  },
  content: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  iconContainer: {
    marginBottom: 30,
  },
  iconGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 15,
  },
  title: {
    fontSize: 32,
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'SpaceMono',
    color: '#FFD700',
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.9,
    letterSpacing: 1,
  },
  decorativeLine: {
    width: 80,
    height: 2,
    backgroundColor: '#FFD700',
    marginBottom: 40,
    borderRadius: 1,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 40,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 1,
  },

});