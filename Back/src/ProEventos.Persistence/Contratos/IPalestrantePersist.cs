using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
        Task<Palestrante[]> GetAllPalstrantesByNomeAsync(string nome, bool includeEventos);
        Task<Palestrante[]> GetAllPlestrantesAsync(bool includeEventos);
        Task<Palestrante> GetAPlestranteByIdAsync(int palestranteId, bool includeEventos);
    }
}