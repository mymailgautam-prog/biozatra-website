          void main() {
            v_tex_coord = a_position * 0.5 + 0.5;
            // v_tex_coord.y = 1.0 - v_tex_coord.y; // Match standard orientation
            gl_Position = vec4(a_position, 0.0, 1.0);
          }
