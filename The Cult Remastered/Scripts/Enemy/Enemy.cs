using UnityEngine;

public class Enemy : MonoBehaviour, IHealthComponent
{
    public int currentHealth { get; set; }
    public int maxHealth { get; set; }

    void Start()
    {
        currentHealth = maxHealth;
    }

    public void Heal(int amount)
    {
        currentHealth += amount;
        if (currentHealth > maxHealth)
        {
            currentHealth = maxHealth;
        }
    }

    public void TakeDamage(int amount)
    {
        currentHealth -= amount;
        if (currentHealth <= 0)
        {
            currentHealth = 0;
            Die();
        }
    }

    public void Die()
    {
        // Handle enemy death logic here
        Destroy(gameObject);
    }
}
