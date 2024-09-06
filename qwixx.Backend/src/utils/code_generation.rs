use rand::Rng;
use std::iter;

const CODE_LENGTH: usize = 5;

pub fn generate_game_code() -> String {
    const CHARSET: &[u8] = b"ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let mut rng = rand::thread_rng();
    let one_char = || CHARSET[rng.gen_range(0..CHARSET.len())] as char;
    iter::repeat_with(one_char).take(CODE_LENGTH).collect()
}
