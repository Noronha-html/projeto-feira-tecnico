using UnityEngine;

public interface IHealthComponent
{
    int currentHealth { get; set; }
    int maxHealth { get; set; }

    void Heal(int amount);
    void TakeDamage(int amount);
    void Die();
}
